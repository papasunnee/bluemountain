const {
  EnquiryTC,
  CandidateTC,
  OrganizationTC
} = require('../composers');

// Add fields and resolvers to rootQuery
module.exports = {
  createEnquiry: EnquiryTC.getResolver('createOne'),
  registerCandidate: CandidateTC.getResolver('createOne'),
  registerOrganization: OrganizationTC.getResolver('createOne'),
};
