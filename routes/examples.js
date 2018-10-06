const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('examples', { title: 'Blinky-Lite: Examples' });
});

module.exports = router;
