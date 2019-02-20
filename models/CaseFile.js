/* eslint-disable func-names */
const keystone = require('keystone');

const { Types } = keystone.Field;

/**
 * CaseFile Model
 * ==========
 */

const CaseFile = new keystone.List('CaseFile', {
  noedit: true,
  track: {
    createdAt: true,
    createdBy: true,
  },
  map: { name: 'title' },
});

CaseFile.add({
  title: { type: Types.Text, required: true, initial: true },
  candidateId: {
    type: Types.Relationship, ref: 'Candidate', index: true, initial: true,
  },
  fileNumber: {
    type: Types.Number, default: 1, required: true, index: true, noedit: true,
  },
  // createdAt: { type: Types.Datetime, index: true, default: Date.now() },
  content: {
    type: Types.Html, wysiwyg: true, height: 200, initial: true,
  },
});

CaseFile.defaultColumns = 'title, candidateId|20%, fileNumber, createdAt|20%';
CaseFile.register();
