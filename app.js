/** NPM Packages */
require('colors');
const express = require('express');

/** Custom Packages */
require('dotenv').config({path: './configuration/.env'});

const routeApi = require('./routes/index');

/** Initialize Express App */
const app = express();
app.use(express.json());

/** Routes Mounting */
app.use('/', routeApi);

module.exports = app;
