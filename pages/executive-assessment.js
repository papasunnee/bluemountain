import React, { Component } from "react";
import Head from "next/head";
import Banner from "../components/Header/Banner";
import Layout from "../components/Layout";
import Ready from "../components/Footer/Ready";
import ServiceBody from "../components/Sector/ServiceBody";

export default class extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Head>
          <title>Executive Assessment</title>
        </Head>
        <Banner
          bgImage="executiveAssessment"
          min
          title="EXECUTIVE ASSESSMENT"
        />
        <ServiceBody serviceImage="executiveassessment" />
        <Ready />
      </Layout>
    );
  }
}
