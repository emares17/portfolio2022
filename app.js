const express = require('express');
const dotenv = require('dotenv');
const app = express();

// Load config
dotenv.config({ path: './config/config.env'});

// Body Parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

// Public folder
app.use(express.static('public'))

// Routes
app.use('/', require('./routes/router'));

app.listen(process.env.PORT);
console.log('Server started at http://localhost:' + process.env.PORT);