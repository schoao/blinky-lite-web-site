const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('blinkyCircuit', { title: 'Blinky-Lite: Building the Circuit' });
});

module.exports = router;
