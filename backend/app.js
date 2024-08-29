const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const aqiRoutes = require('./routes/aqiRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', aqiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
