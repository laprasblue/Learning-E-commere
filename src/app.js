const compression = require('compression');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

// init middleware
app.use(compression());
app.use(morgan('dev'));
app.use(helmet());

// init db

// init routes

// handle errors

module.exports = app;
