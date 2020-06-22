/** NPM Packages */
const {Queue} = require('bullmq');
const IOredis = require('ioredis');

/** Redis Connection */
const conn = new IOredis(process.env.REDIS_URL);

console.log(conn.options);

const bullmq = async () => {
  const queue = new Queue('default', {conn});
  return queue;
};

module.exports = bullmq;
