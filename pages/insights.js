import React, { Component } from "react";
import Banner from "../components/Header/Banner";
import Layout from "../components/Layout";
import InsightRow from "../components/Insight/insightrow";

export default class extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Banner bgImage="insightHeader" min />
        <InsightRow />
      </Layout>
    );
  }
}
