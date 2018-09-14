import React, { Component, Fragment } from "react";
import Router from "next/router";
import Head from "next/head";
import { Container } from "reactstrap";
import Footer from "../components/Footer/Footer";
import NProgress from "nprogress";

// progress bar
Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default class extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Head>
          <link rel="stylesheet" href="/static/css/nprogress.css" />
        </Head>
        <Container
          fluid
          style={{
            paddingLeft: "0px",
            paddingRight: "0px"
          }}
        >
          {/* <Nav/> */}
          {this.props.children}
          <Footer />
        </Container>
      </Fragment>
    );
  }
}
