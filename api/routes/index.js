// const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');

const serveStatic = require('serve-static');

const schema = require('../graphql/schema');
const getContext = require('../graphql/lib/getContext');

// Setup Route Bindings
module.exports = (app) => {
  // if (process.env.NODE_ENV === 'development') app.use(require('cors')())

  // Register API middleware
  // app.use(
  //   '/graphql',
  //   bodyParser.json(),
  //   graphqlExpress(() => ({ schema, context: getContext() })),
  // );

  // routes for testing in development
  // if (process.env.NODE_ENV === 'development') {
  //   app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
  // }

  const server = new ApolloServer({ schema });
  server.applyMiddleware({ app, context: getContext() });
  // console.log(server);


  // Views
  app.get('/admin', (req, res) => { res.redirect('/keystone'); });
  // Client App
  app.use(serveStatic(`${__dirname}/client`));
};
