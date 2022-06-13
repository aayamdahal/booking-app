const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectDB = require('./db/connect');
const authRoute = require('./routes/auth');
const hotelRoute = require('./routes/hotels');
const roomsRoute = require('./routes/rooms');
const usersRoute = require('./routes/users');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const port = process.env.PORT || 8080;

const start = async () => {
  try {
    // connectdb
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server spinning on ${port}`);
    });
    console.log('db connected');
  } catch (error) {
    console.log('error', error);
  }
};
start();
// middleware
app.use(cookieParser());

app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/hotels', hotelRoute);
app.use('/api/rooms', roomsRoute);
