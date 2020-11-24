import React, { Component } from "react";
import Global from "../components/Global/Global";
import TextComponent from "../components/Global/TextComponent";
import Banner from "../components/Header/Banner";
import Layout from "../components/Layout";

export default class extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Banner bgImage="about" min title="BLUE MOUNTAIN TV" />
        <TextComponent />
        <Global title="GLOBAL INSIGHT" />
      </Layout>
    );
  }
}
