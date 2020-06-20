require('colors');
const express = require('express');
require('dotenv').config({path: './configuration/.env'});
const {
  dev: {server},
} = require('./configuration/setup');
const routeApi = require('./routes/index');

const app = express();

app.use('/', routeApi);

app.listen(server.PORT, () => {
  console.log(
    '\nServer Info: '.bold +
      `port: ${server.PORT.bold.green}, environment: ${server.ENV.bold.green}.\n` +
      'Base URL: '.bold +
      `http://${server.HOST}:${server.PORT}/\n`.underline.green
  );
});
