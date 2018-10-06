const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('setupRPi', { title: 'Blinky-Lite: Setup RPi' });
});

module.exports = router;
