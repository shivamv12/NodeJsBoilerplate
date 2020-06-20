require('colors');
const express = require('express');
require('dotenv').config({path: './configuration/.env'});
const {
  dev: {server},
} = require('./configuration/setup');

const app = express();

app.listen(server.PORT, () => {
  console.log(
    `\nServer is up on port: ${server.PORT.bold} with environment: ${server.ENV.bold}.\n`
      .green + `Base URL: http://localhost:${server.PORT}/\n`.underline
  );
});
