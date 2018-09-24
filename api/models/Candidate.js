/* eslint-disable func-names */
const keystone = require('keystone');

const { Types } = keystone.Field;

/**
 * Candidate Model
 * ==========
 */
const Candidate = new keystone.List('Candidate', {
  track: {
    createdAt: true,
    updatedAt: true,
  },
});

Candidate.add({
  name: { type: Types.Text, index: true },
  firstName: {
    type: Types.Text, index: true, initial: true, required: true,
  },
  lastName: {
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

/**
 * Relationships
 */
Candidate.relationship({ ref: 'CaseFile', path: 'Case Files', refPath: 'candidateId' });


/**
 * Registration
 */
Candidate.defaultColumns = 'name, email';
Candidate.register();
