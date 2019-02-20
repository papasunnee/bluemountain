// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

// Require keystone
const keystone = require('keystone');

const mailgunUtils = require('./utils/mailgunUtils');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({
  name: 'blue-mountain-backend',
  brand: 'Blue Mountain',
  // less: 'public',
  static: 'public',
  favicon: 'public/favicon.ico',
  // views: 'templates/views',
  'view engine': 'pug',

  emails: 'templates/emails',

  'auto update': true,
  session: true,
  auth: true,
  'user model': 'Admin',
});

// Load your project's Models
keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js
keystone.set('locals', {
  _: require('lodash'),
  env: keystone.get('env'),
  utils: keystone.utils,
  editable: keystone.content.editable,
});

keystone.set('signin logo', '/images/logo.svg');
// Load your project's Routes
keystone.set('routes', require('./routes'));


// Configure the navigation bar in Keystone's Admin UI
keystone.set('nav', {
  candidates: ['Candidate', 'CaseFile'],
  organizations: ['Organization', 'OrganizationCaseFile', 'Job', 'Industry'],
  posts: ['Post', 'PostCategory'],
  enquiries: 'Enquiry',
  admins: 'Admin',
});

// Configure cloudinary
// keystone.set('cloudinary config', process.env.CLOUDINARY_URL);

keystone.set('brandDetails', {
  brand: keystone.get('brand'),
  mailAddress: '22 Kumasi Cresent, Wuse 2, Abuja',
  homepageUrl: 'http://www.bluemountain.com',
  phone: '+234.818.855.5611',
  emailLogoUrl: 'http://www.bluemountain.com/static/images/logo-dark.png',
});

mailgunUtils.checkMailgun();
// Start Keystone to connect to your database and initialise the web server
keystone.start();
