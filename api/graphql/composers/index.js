const keystone = require('keystone');
const { GQC } = require('graphql-compose');
const { composeWithMongoose } = require('graphql-compose-mongoose');

/**
* Mongoose Models
*/
const Post = keystone.list('Post').model;
const PostCategory = keystone.list('PostCategory').model;
const Enquiry = keystone.list('Enquiry').model;
const Candidate = keystone.list('Candidate').model;
const Consultant = keystone.list('Consultant').model;
const Organization = keystone.list('Organization').model;

const PostTC = composeWithMongoose(Post);
const PostCategoryTC = composeWithMongoose(PostCategory);
const EnquiryTC = composeWithMongoose(Enquiry);
const CandidateTC = composeWithMongoose(Candidate);
const ConsultantTC = composeWithMongoose(Consultant);
const OrganizationTC = composeWithMongoose(Organization);

const NewsletterSubscriberTC = GQC.getOrCreateTC('NewsletterSubscriber');
NewsletterSubscriberTC.addFields({ address: 'String', subscribed: 'Boolean', name: 'String' });

/**
* Exports
*/
module.exports = {
  PostTC,
  PostCategoryTC,
  EnquiryTC,
  CandidateTC,
  ConsultantTC,
  OrganizationTC,
  NewsletterSubscriberTC,
};
