const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('gui', { title: 'Blinky-Lite: Building a User Interface' });
});

module.exports = router;
