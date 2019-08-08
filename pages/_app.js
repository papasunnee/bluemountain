// /* eslint-disable no-undef */
// import React from "react";
// import App, { Container } from "next/app";
// import ApolloClient from "apollo-boost";
// import { ApolloProvider } from "react-apollo";
// import fetch from "isomorphic-unfetch";
// // import Router from 'next/router'
// // import { initGA, logPageView } from '../utils/analytics'

// // if (!process.browser) {
// //   global.fetch = fetch
// // }

// const client = new ApolloClient({
//   uri: process.env.BACKEND_URL || "/graphql"
// });

// export default class MyApp extends App {
//   static async getInitialProps({ Component, router, ctx }) {
//     let pageProps = {};

//     if (Component.getInitialProps) {
//       pageProps = await Component.getInitialProps(ctx);
//     }

//     return { pageProps };
//   }

//   componentDidMount() {
//     // initGA()
//     // logPageView()
//     // Router.router.events.on('routeChangeComplete', logPageView)
//   }

//   render() {
//     // console.log(process.env.BACKEND_URL);
//     const { Component, pageProps } = this.props;
//     return (
//       <Container>
//         <ApolloProvider client={client}>
//           <Component {...pageProps} />
//         </ApolloProvider>
//       </Container>
//     );
//   }
// }

import App, { Container } from "next/app";
import React from "react";
import withApolloClient from "../lib/with-apollo-client";
import { ApolloProvider } from "react-apollo";

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(MyApp);
