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
