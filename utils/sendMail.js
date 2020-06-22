/** NPM Packages */
const nodemailer = require('nodemailer');

const sendMail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const message = {
    from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
    to: options.to,
    subject: options.subject + ' ✔',
    html: options.body,
  };

  const info = await transporter.sendMail(message);
  console.log('\n✔ Message sent, success id:'.bold, info.messageId);
};

module.exports = sendMail;
