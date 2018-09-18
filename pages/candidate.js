import React, { Component } from "react";
import Banner from "../components/Header/Banner";
import FullText3 from "../components/Assessment/FullText3";
import Layout from "../components/Layout";
import Title from "../components/About/Title";
import Ready from "../components/Footer/Ready";

export default class extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Banner bgImage="registration" />
        <Title title="REGISTRATION" />
        <FullText3 />
        <Ready />
      </Layout>
    );
  }
}
