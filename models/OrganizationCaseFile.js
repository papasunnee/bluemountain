/* eslint-disable func-names */
const keystone = require('keystone');

const { Types } = keystone.Field;

/**
 * OrganizationCaseFile Model
 * ==========
 */

const OrganizationCaseFile = new keystone.List('OrganizationCaseFile', {
  map: { name: 'title' },
});

OrganizationCaseFile.add({
  title: { type: String, required: true },
  OrganizationId: { type: Types.Relationship, ref: 'Organization', index: true },
  fileNumber: {
    type: Types.Number, default: 1, required: true, index: true,
  },
  createdAt: { type: Types.Datetime, index: true, default: Date.now() },
  content: { type: Types.Html, wysiwyg: true, height: 200 },
});

OrganizationCaseFile.defaultColumns = 'title, candidate|20%, createdAt|20%, OrganizationId';
OrganizationCaseFile.register();
