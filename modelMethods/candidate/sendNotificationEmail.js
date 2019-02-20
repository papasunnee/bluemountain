const keystone = require('keystone');

module.exports = function sendConfirmationEmail() {
  const candidate = this;
  return new Promise(((resolve, reject) => {
    console.log('sending candidate registration otification email');

    if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
      console.log('Unable to send email - no mailgun credentials provided');
      reject(new Error('could not find mailgun credentials'));
    }

    const brand = keystone.get('brand');

    keystone.list('Admin').model.find({ recieveGuestEnquiries: true }).exec((error, admins) => {
      if (error) {
        reject(error);
      }
      if (admins) {
        new keystone.Email({
          templateName: 'candidate-registration-notification',
          transport: 'mailgun',
        }).send({
          to: admins,
          from: {
            name: 'Blue Mountain Website',
            email: 'admin@bluemountainexecutives.com',
          },
          subject: 'New candidate for bluemountainexecutives.com',
          candidate,
          brand,
        }, (err) => {
          if (err) {
            console.log(err);
            reject(err);
          }
        });
      }
      resolve();
    });
  }));
};
