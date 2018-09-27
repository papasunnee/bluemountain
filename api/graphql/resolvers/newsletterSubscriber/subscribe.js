// const keystone = require('keystone');
const { NewsletterSubscriberTC } = require('../../composers');
const mailgun = require('mailgun-js')({ apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN });

module.exports = {
  kind: 'mutation',
  name: 'subscribe',
  description: 'subscribe from newsletter',
  args: { address: 'String!' },
  type: NewsletterSubscriberTC,
  resolve: async ({ args }) => {
    const { address } = args;
    const user = {
      subscribed: true,
      address,
      // name: 'Bob Bar',
      // vars: {age: 26}
    };

    const list = mailgun.lists('subscribers@bluemountainexecutives.com');
    return new Promise(((resolve, reject) => {
      list.members().create(user, (e, data) => {
        if (e) {
          delete user.address;
          list.members(address).update({ subscribed: 'true' }, (err, updateData) => {
            if (err) {
              reject(err);
            }
            resolve(updateData.member);
          });
        } else {
          // `data` is the member details
          resolve(data.member);
        }
      });
    }));
  },
};
