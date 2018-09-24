const {
  EnquiryTC,
  CandidateTC,
  EmployerTC
} = require('../composers');

// Add fields and resolvers to rootQuery
module.exports = {
  createEnquiry: EnquiryTC.getResolver('createOne'),
  registerCandidate: CandidateTC.getResolver('createOne'),
  registerEmployer: EmployerTC.getResolver('createOne'),
};
