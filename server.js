console.log("🟢 server.js loaded");

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
const reflectionRoutes = require('./routes/reflectionRoutes');
// const poemRoutes = require('./routes/poemRoutes'); // ❌ Only include if this file exists

app.use('/api/reflections', reflectionRoutes);
// app.use('/api/poems', poemRoutes); // 

app.get('/', (req, res) => res.send('VerseOpedia API is live!'));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
