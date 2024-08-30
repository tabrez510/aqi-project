const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
const aqiRoutes = require('./routes/aqiRoutes');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

app.use(express.json());

app.use('/api', aqiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
