const config = {
  /** Development ENV Setup */
  dev: {
    server: {
      HOST: process.env.HOST || 'localhost',
      PORT: process.env.PORT || 8080,
      ENV: process.env.ENVIRONMENT || 'development',
    },
    dbLocal: {},
    dbServer: {
      URL: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    },
  },
};

module.exports = config;
