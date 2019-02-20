/* eslint-disable no-undef */
import React from 'react'
import App, { Container } from 'next/app'
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import fetch from 'isomorphic-unfetch'
// import Router from 'next/router'
// import { initGA, logPageView } from '../utils/analytics'

if (!process.browser) {
  global.fetch = fetch
}

const client = new ApolloClient({
  uri: process.env.BACKEND_URL || '/graphql'
});

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  componentDidMount () {
    // initGA()
    // logPageView()
    // Router.router.events.on('routeChangeComplete', logPageView)
  }

  render () {
    // console.log(process.env.BACKEND_URL);
    const { Component, pageProps } = this.props
    return (
      <Container>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    )
  }
}
