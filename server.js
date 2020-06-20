require('colors');
const express = require('express');
require('dotenv').config({path: './configuration/.env'});
const {
  dev: {server},
} = require('./configuration/setup');
const dbConfig = require('./configuration/database');
dbConfig();

const routeApi = require('./routes/index');

const app = express();

app.use('/', routeApi);

app.listen(server.port, () => {
  console.log(
    '\nServer Info: '.bold +
      `port: ${server.port.bold.green}, environment: ${server.env.bold.green}.\n` +
      'Base URL: '.bold +
      `http://${server.host}:${server.port}/`.underline.green
  );
});
