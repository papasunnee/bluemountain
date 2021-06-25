import React, { Component } from "react";
import Head from "next/head";
import Banner from "../../components/Header/Banner";
import Layout from "../../components/Layout";
import ServiceBodyUpgrade from "../../components/Sector/ServiceBodyUpgrade";

export default class extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Head>
          <title>Leadership Development</title>
        </Head>
        <Banner
          bgImage="executiveAssessment"
          min
          title="LEADERSHIP DEVELOPMENT"
        />
        <ServiceBodyUpgrade serviceImage="executivesearch" />
      </Layout>
    );
  }
}
