const keystone = require('keystone');

module.exports = function sendConfirmationEmail() {
  const candidate = this;
  return new Promise(((resolve, reject) => {
    console.log('sending candidate confirmation email');

    if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
      console.log('Unable to send email - no mailgun credentials provided');
      reject(new Error('could not find mailgun credentials'));
    }

    const brandDetails = keystone.get('brandDetails');

    new keystone.Email({
      templateName: 'candidate-registration-confirmation',
      transport: 'mailgun',
    }).send({
      to: [candidate.email],
      from: {
        name: 'Blue Mountain Website',
        email: 'no-reply@bluemountainexecutives.com',
      },
      subject: 'Blue Mountain Registration',
      candidate,
      // interests: candidate.stringifyInterests(),
      brandDetails,
    }, (err) => {
      if (err) {
        console.log(err);
        reject(err);
      }
    });
    resolve();
  }));
};
