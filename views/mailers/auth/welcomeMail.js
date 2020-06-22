const welcomeMail = (payload) => {
  const code = `<html><body>
                <center>☸ Welcome to the Portal ☸</center>
                <p>Hello ${payload.name},<br/>We're glad to see you with us onboard on platform. Use your registered email
                <b>${payload.to}</b> to login.<br/>
                <br/>Thank You.</p>
                </body></html>`;
  return code;
};

module.exports = welcomeMail;
