const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const coinRoutes = require('./src/routes/coinRoutes');
const categoryRoutes = require('./src/routes/categoryRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/coins', coinRoutes);
app.use('/api/categories', categoryRoutes);

const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
