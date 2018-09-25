/* eslint-disable func-names */
const keystone = require('keystone');

const { Types } = keystone.Field;

const { COUNTRIES, SERVICES, COMPANY_SIZES } = require('../../constants');

/**
 * Organization Model
 * ==========
 */
const Organization = new keystone.List('Organization', {
  track: true,
});

Organization.add({
  name: { type: Types.Text, index: true },
  email: {
    type: Types.Email, initial: true, required: true, unique: true, index: true,
  },
  password: { type: Types.Password, initial: true, required: true },
  passwordVersion: { type: Types.Number, required: true, default: 1 },
  country: {
    type: Types.Select, options: COUNTRIES, required: true, initial: true,
  },
  staffSize: {
    type: Types.Select, options: COMPANY_SIZES, required: true, initial: true,
  },
  services: {
    type: Types.Select, options: SERVICES, required: true, initial: true,
  },
  message: {
    type: Types.Textarea, initial: true, required: true, index: true,
  },
});

/**
 * Relationships
 */
Organization.relationship({ ref: 'Job', path: 'Jobs', refPath: 'OrganizationId' });
Organization.relationship({ ref: 'OrganizationCaseFile', path: 'Case Files', refPath: 'OrganizationId' });

/**
 * Registration
 */
Organization.defaultColumns = 'name, email, canAccessKeystone, isOrganization';
Organization.register();
