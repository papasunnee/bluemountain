const {
  PostTC,
  JobTC,
} = require('../composers');

// Add fields and resolvers to rootQuery
module.exports = {
  posts: PostTC.getResolver('pagination'),
  jobs: JobTC.getResolver('findMany'),
  currentTime: {
    type: 'Date',
    resolve: () => new Date().toISOString(),
  },
};
