/* eslint-disable func-names */
const keystone = require('keystone');

const { Types } = keystone.Field;

/**
 * EmployerCaseFile Model
 * ==========
 */

const EmployerCaseFile = new keystone.List('EmployerCaseFile', {
  map: { name: 'title' },
});

EmployerCaseFile.add({
  title: { type: String, required: true },
  employerId: { type: Types.Relationship, ref: 'Employer', index: true },
  fileNumber: {
    type: Types.Number, default: 1, required: true, index: true,
  },
  createdAt: { type: Types.Datetime, index: true, default: Date.now() },
  content: { type: Types.Html, wysiwyg: true, height: 200 },
});

EmployerCaseFile.defaultColumns = 'title, candidate|20%, createdAt|20%, employerId';
EmployerCaseFile.register();
