import React, { Component } from "react";
import Head from "next/head";
import Banner from "../../components/Header/Banner";
import Layout from "../../components/Layout";
import Ready from "../../components/Footer/Ready";
import ServiceBodyUpgrade from "../../components/Sector/ServiceBodyUpgrade";

export default class extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Head>
          <title>Expatriates</title>
        </Head>
        <Banner bgImage="executiveCoaching" min title="EXPATRIATES" />
        <ServiceBodyUpgrade serviceImage="executivesearch" />
      </Layout>
    );
  }
}
