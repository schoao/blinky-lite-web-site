const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('slideShow', { title: 'Blinky-Lite: Slide Show' });
});

module.exports = router;
