const express = require('express');
const dotenv = require('dotenv');
const app = express();
const mongoose = require('mongoose');
const connectDB = require('./config/connectDB');

// Load config
dotenv.config({ path: './config/config.env'});

// Connect to DB
connectDB()

// Body Parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

// Public folder
app.use(express.static('public'))

// Routes
app.use('/', require('./routes/router'));
app.use('/api', require('./routes/resumeAPI'));

app.listen(process.env.PORT);
console.log('Server started at http://localhost:' + process.env.PORT);