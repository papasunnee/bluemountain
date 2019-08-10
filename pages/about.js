import React, { Component } from "react";
import Banner from "../components/Header/Banner";
import ServiceRow from "../components/About/ServiceRow";
import Layout from "../components/Layout";
import Ready from "../components/Footer/Ready";
import AboutText from "../components/About/AboutText";

export default class extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Banner bgImage="about" min />
        <AboutText />
        <ServiceRow />
        <Ready />
      </Layout>
    );
  }
}
