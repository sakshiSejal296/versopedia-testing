const express = require('express');
const router = express.Router();
const {
  createReflection,
  getReflectionsByPoemId,
  deleteReflection,
  getTodayPoem
} = require('../controllers/reflectionController');


router.get('/poem/today', getTodayPoem);

// Other routes
router.post('/', createReflection);
router.get('/:poemId', getReflectionsByPoemId);
router.delete('/:id', deleteReflection);

module.exports = router;
