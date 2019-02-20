// const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');

// const serveStatic = require('serve-static');

const schema = require('../graphql/schema');
// const getContext = require('../graphql/lib/getContext');

// Setup Route Bindings
module.exports = (app) => {
  // const server = new ApolloServer({ schema, context: getContext() });
  const server = new ApolloServer({ schema });
  server.applyMiddleware({ app });

  // Views
  app.get('/', (req, res) => { res.redirect('/keystone'); });
  // Client App
  // app.use(serveStatic(`${__dirname}/client`));
};
