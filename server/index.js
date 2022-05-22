const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectDB = require('./db/connect');
require('dotenv').config();

const port = process.env.PORT || 8181;

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
  