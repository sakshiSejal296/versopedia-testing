const express = require('express');
const { getPoemOfTheDay } = require('../controllers/poemController');
const { PrismaClient } = require('@prisma/client');

const router = express.Router();
const prisma = new PrismaClient();

// Route: GET /api/poems/today
router.get('/today', getPoemOfTheDay);

// Route: GET /api/poems
router.get('/', async (req, res) => {
  try {
    const poems = await prisma.poem.findMany();
    res.status(200).json(poems);
  } catch (error) {
    console.error("❌ Failed to fetch poems:", error);
    res.status(500).json({ error: 'Failed to fetch poems' });
  }
});

// Route: POST /api/poems
router.post('/', async (req, res) => {
  const { title, content,author,genre,date } = req.body;
  try {
    const newPoem = await prisma.poem.create({
      data: { title, 
        author,
        content,
        genre,
        date:new Date(date) },
    });
    res.status(201).json(newPoem);
  } catch (error) {
    console.error("❌ Failed to create poem:", error);
    res.status(500).json({ error: 'Failed to create poem' });
  }
});

module.exports = router;
