/** NPM Packages */
const mongoose = require('mongoose');

/** Custom Packages */
const {
  dev: {server, dbServer, dbLocal},
} = require('./setup');

/** DB object for online & local db setup */
const database = {
  server: {
    mongoConfig: {
      autoIndex: false,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    },
    url: `mongodb+srv://${dbServer.dbUser}:${dbServer.password}@${dbServer.cluster}/${dbServer.dbName}?retryWrites=true&w=majority`,
  },
  local: {
    url: `mongodb://${dbLocal.host}:${dbLocal.port}/${dbServer.dbName}`,
  },
};

const connectDb = async () => {
  try {
    await dbServerUp(server.env);
  } catch (err) {
    console.log('DB Connection Error:'.bold, `${err.message}\n`.red);
  }
};
mongoose.set('debug', true);

module.exports = connectDb;

/** DB Server Up Method */
async function dbServerUp(env) {
  switch (env) {
    case 'development':
      const conn = await mongoose.connect(
        database.server.url,
        database.server.mongoConfig
      );
      console.log(
        `MongoDB connection state: `.bold +
          `${conn.connection.readyState}\n`.green
      );
      break;
  }
}
