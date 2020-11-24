import React, { Component } from "react";
import Banner from "../components/Header/Banner";
import Layout from "../components/Layout";
import TextComponent from "../components/Global/TextComponent";

export default class extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Banner bgImage="insightHeader" min />
        <TextComponent title="Privacy Policy" />
      </Layout>
    );
  }
}
