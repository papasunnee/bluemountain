import React, { Component } from "react";
import Banner from "../components/Header/Banner";
import FullText2 from "../components/Assessment/FullText2";
import Layout from "../components/Layout";

export default class extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Banner bgImage="about" min />
        <FullText2 />
      </Layout>
    );
  }
}
