/*const express = require('express');
const router = express.Router();
const {
  createReflection,
  getReflectionsByPoemId,
  deleteReflection,
  getTodayPoem,
  getAllReflections,
  updateReflection
} = require('../controllers/reflectionController');

// Define routes
router.get('/test', (req, res) => {
  res.status(200).json({ message: 'Test endpoint working!', id: 1 });
});

router.get('/poem/today', getTodayPoem); // GET today's poem
router.get('/:poemId', getReflectionsByPoemId); // GET by poemId (optional)
router.get('/', getAllReflections); // ✅ GET all reflections
router.post('/', createReflection); // ✅ POST
router.put('/:id', updateReflection); // ✅ PUT
router.delete('/:id', deleteReflection); // ✅ DELETE

module.exports = router;
*/

const express = require('express');
const router = express.Router();
const {
  createReflection,
  getReflectionsByPoemId,
  deleteReflection,
  getTodayPoem,
  getAllReflections,
  updateReflection
} = require('../controllers/reflectionController');

/**
 * @swagger
 * /api/reflections/test:
 *   get:
 *     summary: Test the reflections route
 *     responses:
 *       200:
 *         description: Returns a test message
 */
router.get('/test', (req, res) => {
  res.status(200).json({ message: 'Test endpoint working!', id: 1 });
});

/**
 * @swagger
 * /api/reflections/poem/today:
 *   get:
 *     summary: Get today's poem
 *     responses:
 *       200:
 *         description: The poem of the day
 */
router.get('/poem/today', getTodayPoem);

/**
 * @swagger
 * /api/reflections/{poemId}:
 *   get:
 *     summary: Get reflections for a specific poem by ID
 *     parameters:
 *       - in: path
 *         name: poemId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the poem
 *     responses:
 *       200:
 *         description: Reflections for the specified poem
 */
router.get('/:poemId', getReflectionsByPoemId);

/**
 * @swagger
 * /api/reflections:
 *   get:
 *     summary: Get all reflections
 *     responses:
 *       200:
 *         description: A list of all reflections
 */
router.get('/', getAllReflections);

/**
 * @swagger
 * /api/reflections:
 *   post:
 *     summary: Create a new reflection
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               poemId:
 *                 type: integer
 *               name:
 *                 type: string
 *               text:
 *                 type: string
 *     responses:
 *       201:
 *         description: Reflection created successfully
 */
router.post('/', createReflection);

/**
 * @swagger
 * /api/reflections/{id}:
 *   put:
 *     summary: Update a reflection
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *     responses:
 *       200:
 *         description: Reflection updated successfully
 */
router.put('/:id', updateReflection);

/**
 * @swagger
 * /api/reflections/{id}:
 *   delete:
 *     summary: Delete a reflection
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Reflection deleted successfully
 */
router.delete('/:id', deleteReflection);

module.exports = router;
