const express = require('express');
const connectDB = require('./config/db');

const app = express();

//===============
// CONNECT DATABASE
//===============
connectDB();

app.get('/', (req, res) => res.send('API IS RUNNING!'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`🌍 Server started on port ${PORT}`));