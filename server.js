/** NPM Packages */
require('colors');
const express = require('express');

/** Custom Packages */
require('dotenv').config({path: './configuration/.env'});
const {
  dev: {server},
} = require('./configuration/setup');
const routeApi = require('./routes/index');
const dbConfig = require('./configuration/database');

/** Initialize Database Connection */
dbConfig();

/** Initialize Express App */
const app = express();
app.use(express.json());

/** Routes Mounting */
app.use('/', routeApi);

/** Creating a Server */
app.listen(server.port, () => {
  console.log(
    '\nServer Info: '.bold +
      `port: ${server.port.bold.green}, environment: ${server.env.bold.green}.\n` +
      'Base URL: '.bold +
      `http://${server.host}:${server.port}/`.underline.green
  );
});
