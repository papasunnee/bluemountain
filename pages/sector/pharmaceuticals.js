import React, { Component } from "react";
import Head from "next/head";
import Banner from "../../components/Header/Banner";
import SectorBody from "../../components/Sector/SectorBody";
import Layout from "../../components/Layout";
import Title from "../../components/About/Title";
import Ready from "../../components/Footer/Ready";

export default class extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Head>
          <title>Pharmaceuticals</title>
        </Head>
        <Banner bgImage="life" />
        <Title title="LSP" country="life" />
        <SectorBody />
        {/* <Ready /> */}
      </Layout>
    );
  }
}
