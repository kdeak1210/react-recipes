const express = require('express');
const router = express.Router();

// Render the index view
router.get('/', (req, res) => {
  res.render('index', null)
});

// Render the testforms view
router.get('/testforms', (req, res) => {
  res.render('testforms', null)
})

module.exports = router;