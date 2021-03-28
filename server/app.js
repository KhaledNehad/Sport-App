const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const authRoute = require('./routes/authRoute');
const postRoute = require('./routes/postRoute');

dotenv.config();

const app = express();

connectDB();

app.get('/', (req, res) => {
  res.send('Hello');
});

app.use(express.json());

// Route Middleware
app.use('/api/user', authRoute);
app.use('/api/', postRoute);

const PORT = process.env.PORT;
app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} mode, on ${PORT}`)
);
