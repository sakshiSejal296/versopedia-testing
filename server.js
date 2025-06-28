console.log("🟢 server.js loaded");

const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const oasGenerator = require('express-oas-generator');
require('dotenv').config();

const app = express();
process.env.NODE_ENV = 'development';

// 🟨 Mount OpenAPI middleware
oasGenerator.handleResponses(app);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get('/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

app.use(cors());
app.use(express.json());

// ✅ 🔗 Mount your actual routes here
const reflectionRoutes = require('./routes/reflectionRoutes');
app.use('/api/reflections', reflectionRoutes);

// 🧪 Sample test routes
app.get('/api/test', (req, res) => {
  res.json({ message: 'GET working!' });
});

app.post('/api/test', (req, res) => {
  res.status(201).json({ message: 'POST received', body: req.body });
});

app.get('/', (req, res) => res.send('VerseOpedia API is live!'));

// 🚀 Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  oasGenerator.handleRequests();
});
