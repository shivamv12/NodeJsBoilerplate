require('colors');
const express = require('express');
require('dotenv').config({path: './configuration/.env'});

const app = express();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(
    `\nServer is up on port: ${PORT.bold} with environment: ${process.env.ENVIRONMENT.bold}.\n`
      .green + `Base URL: http://localhost:${PORT}/\n`.underline
  );
});
