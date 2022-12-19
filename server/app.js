// Require modules here
const express = require('express');
const coursesRouter = require('./routes/coursesRouter');
const morgan = require('morgan');

const app = express();

// Add to the middleware stack

app.use(morgan('dev'));
app.use(express.json());

// Route middlewares

app.use('/', coursesRouter);

module.exports = app;
