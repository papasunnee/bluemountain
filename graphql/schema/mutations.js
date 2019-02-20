const {
  EnquiryTC,
  CandidateTC,
  OrganizationTC,
  ConsultantTC,
  NewsletterSubscriberTC,
} = require('../composers');

// Add fields and resolvers to rootQuery
module.exports = {
  subscribeToNewsletter: NewsletterSubscriberTC.getResolver('subscribe'),
  createEnquiry: EnquiryTC.getResolver('createOne'),
  registerCandidate: CandidateTC.getResolver('createOne'),
  registerOrganization: OrganizationTC.getResolver('createOne'),
  registerConsultant: ConsultantTC.getResolver('createOne'),
};
