import React, { Component } from "react";
import Head from "next/head";
import Banner from "../components/Header/Banner";
import Layout from "../components/Layout";
import ServiceBodyUpgrade from "../components/Sector/ServiceBodyUpgrade";

export default class extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Head>
          <title>Board Services</title>
        </Head>
        <Banner bgImage="executiveAssessment" min title="BOARD SERVICES" />
        <ServiceBodyUpgrade serviceImage="executivesearch" />
        {/* <Ready /> */}
      </Layout>
    );
  }
}
