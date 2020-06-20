const mongoose = require('mongoose');

const {
  dev: {server, dbServer, dbLocal},
} = require('./setup');

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

const connectDb = async () => await serverUp(server.env);
mongoose.set('debug', true);

async function serverUp(env) {
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

module.exports = connectDb;
