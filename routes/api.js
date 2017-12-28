const express = require('express');
const router = express.Router();
const controllers = require('../controllers')

// GET all of a requested resource
router.get('/:resource', (req, res) => {

  const { resource } = req.params;
  const controller = controllers[resource];

  if (controller == null) {
    res.json({
      confirmation: 'fail',
      message: `Resource '${resource}' is not found`
    });

    return;
  }
  
  controller.get(req.query, false)
  .then(results => {
    res.json({
      confirmation: 'success',
      results: results
    })
  })
  .catch(err => {
    res.json({
      confirmation: 'fail',
      message: err
    });
  });
});

// GET a specific resource by its id
router.get('/:resource/:id', (req, res) => {
  
  const { resource, id } = req.params;
  const controller = controllers[resource];

  if (controller == null) {
    res.json({
      confirmation: 'fail',
      message: `Resource '${resource}' is not found`
    });

    return;
  }

  controller.getById(id, false)
  .then(results => {
    res.json({
      confirmation: 'success',
      results: results
    })
  })
  .catch(err => {
    res.json({
      confirmation: 'fail',
      message: `${resource} with id '${id}' not was not found`
    });
  });
});

// POST to create a new resource
router.post('/:resource', (req, res) => {
  
  const { resource } = req.params;
  const controller = controllers[resource];

  if (controller == null) {
    res.json({
      confirmation: 'fail',
      message: `Resource '${resource}' is not found`
    });

    return;
  }

  controller.create(req.body, false)
  .then(result => {
    res.json({
      confirmation: 'success',
      result: result
    })
  })
  .catch(err => {
    res.json({
      confirmation: 'fail',
      message: err
    });
  });
});

// PUT to update a resource found by its id
router.put('/:resource/:id', (req, res) => {
  
  const { resource, id } = req.params;
  const controller = controllers[resource];

  if (controller == null) {
    res.json({
      confirmation: 'fail',
      message: `Resource '${resource}' is not found`
    });

    return;
  }

  controller.update(id, req.body, false)
  .then(result => {
    res.json({
      confirmation: 'success',
      result: result
    });
  })
  .catch(err => {
    res.json({
      confirmation: 'fail',
      message: err
    });
  });
});

// DELETE to destory a resource found with its id
router.delete('/:resource/:id', (req, res) => {
  
  const { resource, id } = req.params;
  const controller = controllers[resource];

  if (controller == null) {
    res.json({
      confirmation: 'fail',
      message: `Resource '${resource}' is not found`
    });

    return;
  }

  controller.destroy(id, false)
  .then(result => {
    res.json({
      confirmation: 'success',
      result: result
    })
  })
  .catch(err => {
    res.json({
      confirmation: 'fail',
      message: err
    })
  })

});

module.exports = router;