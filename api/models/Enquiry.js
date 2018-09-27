/* eslint-disable func-names */
const keystone = require('keystone');
// const expertise = require('../../expertise');

const { Types } = keystone.Field;

/**
 * Enquiry Model
 * ==========
 */
const Enquiry = new keystone.List('Enquiry', {
  track: { createdAt: true },
  nocreate: true,
  noedit: true,
});

Enquiry.add({
  name: {
    type: Types.Text, index: true, required: true, initial: true,
  },
  phone: {
    type: Types.Text, index: true, required: true, initial: true,
  },
  email: {
    type: Types.Email, initial: true, required: true, index: true,
  },
  orgName: {
    type: Types.Text, index: true, required: true, initial: true,
  },
  timeToCall: {
    type: Types.Text, required: true, initial: true,
  },
});

Enquiry.schema.pre('save', function (next) {
  this.wasNew = this.isNew;
  next();
});

Enquiry.schema.post('save', function () {
  if (this.wasNew) {
    try {
      // this.sendNotificationEmail();
      // this.sendConfirmationEmail();
    } catch (e) {
      console.log(e);
    }
  }
});

// Enquiry.schema.methods.stringifyInterests = function () {
//   const enquiry = this;
//   return expertise.map(item => (enquiry[item.key] ? item.title : '')).filter(String);
// };
//
// Enquiry.schema.methods.sendNotificationEmail = function () {
//   const enquiry = this;
//
//   return new Promise(((resolve, reject) => {
//     console.log('sending enquiry notification email');
//
//     if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
//       console.log('Unable to send email - no mailgun credentials provided');
//       return callback(new Error('could not find mailgun credentials'));
//     }
//
//     const brand = keystone.get('brand');
//
//     keystone.list('Admin').model.find({ recieveGuestEnquiries: true }).exec((err, admins) => {
//       if (err) {
//         reject(err);
//       }
//       if (admins) {
//         new keystone.Email({
//           templateName: 'guest-enquiry-notification',
//           transport: 'mailgun',
//         }).send({
//           to: admins,
//           from: {
//             name: 'Blue Mountain Website',
//             email: 'admin@bluemountain.com',
//           },
//           subject: 'New Enquiry for bluemountain.com',
//           enquiry,
//           interests: enquiry.stringifyInterests(),
//           brand,
//         }, (err) => {
//           if (err) {
//             console.log(err);
//             reject(err);
//           }
//         });
//       }
//       resolve();
//     });
//   }));
// };
//
// // guest-enquiry-confirmation
// Enquiry.schema.methods.sendConfirmationEmail = function () {
//   const enquiry = this;
//   return new Promise(((resolve, reject) => {
//     console.log('sending enquiry confirmation email');
//
//     if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
//       console.log('Unable to send email - no mailgun credentials provided');
//       reject(new Error('could not find mailgun credentials'));
//     }
//
//     const brandDetails = keystone.get('brandDetails');
//
//     new keystone.Email({
//       templateName: 'guest-enquiry-confirmation',
//       transport: 'mailgun',
//     }).send({
//       to: [enquiry.email],
//       from: {
//         name: 'Blue Mountain Website',
//         email: 'no-reply@bluemountain.com',
//       },
//       subject: 'Blue Mountain Enquiry',
//       enquiry,
//       interests: enquiry.stringifyInterests(),
//       brandDetails,
//     }, (err) => {
//       if (err) {
//         console.log(err);
//         reject(err);
//       }
//     });
//     resolve();
//   }));
// };

/**
 * Registration
 */
Enquiry.defaultColumns = 'name, phone, email';
Enquiry.register();
