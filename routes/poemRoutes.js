const express = require('express');
const { getPoemOfTheDay } = require('../controllers/poemController');

const router = express.Router();

// Route: /api/poems/today
router.get('/today', getPoemOfTheDay);

module.exports = router;
