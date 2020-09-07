/** Core Packages */
/** NPM Packages */
/** Custom Packages */
const app = require('./app');
const {
  dev: {server},
} = require('./configuration/setup');
const dbConfig = require('./configuration/database');

/** Initialize Database Connection */
dbConfig();

/** Assinging the PORT */
const PORT = server.port;

/** Creating a Server */
app.listen(PORT, () => {
  console.log(
    '\nServer running at ' +
      `http://${server.host}:${PORT}/`.green.underline.bold +
      ` in ${server.env} mode!`
  );
});

/** Handle Unhandled Exception */
process.on('unhandledRejection', (err, promises) => {
  console.log(`Error: ${err.message}`.red);
  server.close(() => process.exit(1));
});
