import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cors from 'cors';

// import authRoute from './routes/api/authRoute.js';
// import usersRoute from './routes/api/usersRoute.js';
// import postRoute from './routes/api/postRoute.js';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/user.js';

const app = express();

app.use(express.json({ extended: false, limit: '30mb' }));
app.use(cors());
connectDB();

dotenv.config();

app.get('/', (req, res) => {
  res.send('Hello');
});
app.use('/posts', postRoutes);
app.use('/users', userRoutes);

// app.use('/api/user/register', usersRoute);
// app.use('/api/user/login', authRoute);
// app.use('/api/posts', postRoute);
// app.use('/user', userRoutes);

const PORT = process.env.PORT;
app.listen(
  PORT,
  'localhost',
  console.log(`server running in ${process.env.NODE_ENV} mode, on ${PORT}`)
);
