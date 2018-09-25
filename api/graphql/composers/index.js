const keystone = require('keystone');
const { composeWithMongoose } = require('graphql-compose-mongoose');

/**
* Mongoose Models
*/
const Post = keystone.list('Post').model;
const PostCategory = keystone.list('PostCategory').model;
const Enquiry = keystone.list('Enquiry').model;
const Candidate = keystone.list('Candidate').model;
const Organization = keystone.list('Organization').model;

const PostTC = composeWithMongoose(Post);
const PostCategoryTC = composeWithMongoose(PostCategory);
const EnquiryTC = composeWithMongoose(Enquiry);
const CandidateTC = composeWithMongoose(Candidate);
const OrganizationTC = composeWithMongoose(Organization);

/**
* Exports
*/
module.exports = {
  PostTC,
  PostCategoryTC,
  EnquiryTC,
  CandidateTC,
  OrganizationTC,
};
