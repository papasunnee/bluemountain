import React, { Component } from "react";
import Banner from "../components/Header/Banner";
import Layout from "../components/Layout";
import InsightDetail from "../components/Insight/insightdetail";

export default class extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Banner bgImage="insightHeader" min />
        <InsightDetail />
      </Layout>
    );
  }
}
