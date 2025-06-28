const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'GET test successful' });
});

router.post('/', (req, res) => {
  res.status(201).json({ message: 'POST test successful', data: req.body });
});

module.exports = router;
