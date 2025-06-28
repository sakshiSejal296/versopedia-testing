const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;
console.log(`🧪 test-port.js starting on port ${PORT}`);

app.get('/', (req, res) => res.send('Hello'));

app.listen(PORT, () => console.log(`✅ Listening on port ${PORT}`));
