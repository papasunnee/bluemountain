/* eslint-disable func-names */
const keystone = require('keystone');
const {
  sendConfirmationEmail,
  sendNotificationEmail,
} = require('../modelMethods/candidate')

const { Types } = keystone.Field;

/**
 * Consultant Model
 * ==========
 */
const Consultant = new keystone.List('Consultant', {
  track: {
    createdAt: true,
    updatedAt: true,
  },
});

Consultant.add({
  name: { type: Types.Text, index: true },
  // firstName: {
  //   type: Types.Text, index: true, initial: true, required: true,
  // },
  // lastName: {
  //   type: Types.Text, index: true, initial: true, required: true,
  // },
  phone: {
    type: Types.Text, index: true, initial: true, required: true,
  },
  email: {
    type: Types.Email, initial: true, required: true, unique: true, index: true,
  },
  cvFile: { type: Types.CloudinaryImage, initial: true },
  message: {
    type: Types.Textarea, initial: true, required: true, index: true,
  },
  // password: { type: Types.Password, initial: true, required: true },
  // passwordVersion: { type: Types.Number, required: true, default: 1 },
});

Consultant.schema.pre('save', function (next) {
  this.wasNew = this.isNew;
  // this.name = `${this.lastName} ${this.firstName}`;
  next();
});

Consultant.schema.post('save', function () {
  if (this.wasNew) {
    try {
      // TODO: implement fuctions listed below
      // this.sendNotificationEmail();
      // this.sendConfirmationEmail();
    } catch (e) {
      console.log(e);
    }
  }
});

// Methods
Consultant.schema.methods.sendConfirmationEmail = sendConfirmationEmail;
Consultant.schema.methods.sendNotificationEmail = sendNotificationEmail;

/**
 * Relationships
 */
Consultant.relationship({ ref: 'CaseFile', path: 'Case Files', refPath: 'candidateId' });

/**
 * Registration
 */
Consultant.defaultColumns = 'name, email';
Consultant.register();
