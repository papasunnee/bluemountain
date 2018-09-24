const keystone = require('keystone');
const { composeWithMongoose } = require('graphql-compose-mongoose');

/**
* Mongoose Models
*/
const Post = keystone.list('Post').model;
const PostCategory = keystone.list('PostCategory').model;
const Enquiry = keystone.list('Enquiry').model;
const Candidate = keystone.list('Candidate').model;
const Employer = keystone.list('Employer').model;

const PostTC = composeWithMongoose(Post);
const PostCategoryTC = composeWithMongoose(PostCategory);
const EnquiryTC = composeWithMongoose(Enquiry);
const CandidateTC = composeWithMongoose(Candidate);
const EmployerTC = composeWithMongoose(Employer);

/**
* Exports
*/
module.exports = {
  PostTC,
  PostCategoryTC,
  EnquiryTC,
  CandidateTC,
  EmployerTC,
};
