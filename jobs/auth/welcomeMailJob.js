/** NPM Packages */
const {Worker} = require('bullmq');

/** Custom Packages */
const bullmq = require('../../configuration/bullmq');
const welcomeMailResolver = require('../../resolvers/auth/welcomeMailResolver');

const welcomeMailJob = async (payload) => {
  const queue = await bullmq();
  queue.add('welcomeMail', payload);

  const worker = new Worker(
    'default',
    async (job) => await welcomeMailResolver(job.data)
  );
  worker.on('completed', (job) => {
    console.log(`Worker Mesg: ${job.id} has completed.`);
  });
  worker.on('failed', (job, err) => {
    console.log(`Worker Mesg: ${job.id} has failed with ${err.message}!`);
  });
};
module.exports = welcomeMailJob;
