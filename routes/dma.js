const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('dma', { title: 'Blinky-Lite: Building the DMA' });
});

module.exports = router;
