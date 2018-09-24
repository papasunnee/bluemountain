/* eslint-disable func-names */
const keystone = require('keystone');

const { Types } = keystone.Field;

const { COUNTRIES, SERVICES } = require('../../constants');

const staffOptions = [
  { value: 'a', label: '0 - 1' },
  { value: 'b', label: '2 - 10' },
  { value: 'c', label: '11 - 50' },
  { value: 'd', label: '51 - 200' },
  { value: 'e', label: '201 - 500' },
  { value: 'f', label: '501 - 1000' },
  { value: 'g', label: '1,001 - 5,000' },
  { value: 'h', label: '5,001 - 10,000' },
  { value: 'i', label: '10,000+' },
];
/**
 * Employer Model
 * ==========
 */
const Employer = new keystone.List('Employer', {
  track: true,
});

Employer.add({
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
    type: Types.Select, options: staffOptions, required: true, initial: true,
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
Employer.relationship({ ref: 'Job', path: 'Jobs', refPath: 'employerId' });
Employer.relationship({ ref: 'EmployerCaseFile', path: 'Case Files', refPath: 'employerId' });

/**
 * Registration
 */
Employer.defaultColumns = 'name, email, canAccessKeystone, isEmployer';
Employer.register();
