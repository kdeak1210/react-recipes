/** Account Routes... GET: currentUser, Logout. POST: Register, Login */

const express = require('express');
const router = express.Router();
const controllers = require('../controllers');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.get('/:action', (req, res) => {

  const { action } = req.params;

  if (action == 'currentuser'){
    // Check if there is an active session
    if (req.session == null){
      res.json({
        confirmation: 'success',
        user: null
      });

      return;
    }

    // There is an active session - check if theres a token
    if (req.session.token == null){
      res.json({
        confirmation: 'success',
        user: null
      });

      return;
    }

    // Verify token, if valid send back the current user's id
    jwt.verify(req.session.token, process.env.TOKEN_SECRET, (err, decoded) => {
      if (err){
        res.json({
          confirmation: 'fail',
          message: 'Access Denied'  // Invalid token, non-specific message hides JWT use
        });

        return;
      }

      controllers.profile
      .getById(decoded.id, false)
      .then(result => {
        res.json({
          confirmation: 'success',
          user: result
        })

        return;
      })
      .catch(error => {
        res.json({
          confirmation: 'fail',
          message: error
        });

        return;
      })
    })
  }

  if (action == 'logout'){
    // Process logout
    req.session.reset();
    res.json({
      confirmation: 'success',
      user: null
    })
  }

});

router.post('/:action', (req, res) => {

  const { action } = req.params;

  if (action == 'register'){
    // Process register

    controllers.profile
    .create(req.body, false)
    .then(result => {

      // Create a token object on the session
      const token = jwt.sign({id: result.id}, process.env.TOKEN_SECRET, {expiresIn:5000});
      req.session.token = token;

      res.json({
        confirmation: 'success',
        user: result,
        token: token
      });
    })
    .catch((err) => {
      res.json({
        confirmation: 'fail',
        message: err
      });
    });
  }

  if (action == 'login'){
    // Process login
    const candidate = req.body;

    controllers.profile
    .get({ email: candidate.email }, true)
    .then(results => {
      if (results.length == 0){
        throw new Error('User was not found');  // Sends error to catch
        return;
      }
      const profile = results[0];
      const isPasswordMatch = bcrypt.compareSync(candidate.password, profile.password);

      if (!isPasswordMatch){
        throw new Error('Incorrect Password');  // Sends error to catch
        return;
      }

      // Create a token object on the session
      const token = jwt.sign({id: profile._id}, process.env.TOKEN_SECRET, {expiresIn: 5000});
      req.session.token = token;

      res.json({
        confirmation: 'success',
        user: profile.summary()
      });

      return;
    })
    .catch(err => {      
      res.json({
        confirmation: 'fail',
        message: err.message
      });
    });
  }

});


module.exports = router;