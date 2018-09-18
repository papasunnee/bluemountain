import React, { Component } from "react";
import Banner from "../components/Header/Banner";
import ServiceRow from "../components/Country/ServiceRow";
import Layout from "../components/Layout";
import Title from "../components/About/Title";
import Ready from "../components/Footer/Ready";
import InsightRow from "../components/Insight/insightrow";

export default class extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Banner bgImage="insight" />
        <Title title="INSIGHTS"/>
        <InsightRow />
        <Ready/>
      </Layout>
    );
  }
}
