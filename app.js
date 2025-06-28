<<<<<<< HEAD
const express = require('express');
const cors = require('cors');

const poemRoutes = require('./routes/poemRoutes');
const reflectionRoutes = require('./routes/reflectionRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/poems', poemRoutes);
app.use('/api/reflections', reflectionRoutes); // ✅ fixed

module.exports = app;
=======
const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger'); // ✅ Import Swagger

const testRoutes = require('./routes/testRoutes'); // ✅ correct path


const poemRoutes = require('./routes/poemRoutes');
const reflectionRoutes = require('./routes/reflectionRoutes');

const app = express();


// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api/test', testRoutes);
app.use('/api/poems', poemRoutes);
app.use('/api/reflections', reflectionRoutes); // ✅ fixed

module.exports = app;




/*const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger'); // ✅ Import Swagger
const testRoutes = require('./routes/testRoutes');

const app = express();

// ✅ middlewares
app.use(cors());
app.use(express.json());

// ✅ routes
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api/test', testRoutes);

module.exports = app;*/


>>>>>>> 90192a9 (✨ Add Keploy CI workflow)
