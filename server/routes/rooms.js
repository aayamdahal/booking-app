const express = require('express');

const router = express.Router();

router.get('/rooms', (req, res) => {
  res.send('rooms page');
});

module.exports = router;
