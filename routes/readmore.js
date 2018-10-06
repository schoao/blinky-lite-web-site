const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('readmore', { title: 'Blinky-Lite: Read More' });
});

module.exports = router;
