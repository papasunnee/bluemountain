import React, { Component } from "react";
import Banner from "../components/Header/Banner";
import FullText from "../components/Assessment/FullText";
import ServiceRow from "../components/Assessment/ServiceRow";
import Layout from "../components/Layout";
import Title from "../components/About/Title";
import Ready from "../components/Footer/Ready";

export default class extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Banner bgImage="strategicconsulting" />
        <Title title="STRATEGIC CONSULTING" />
        <FullText />
        <ServiceRow />
        <Ready />
      </Layout>
    );
  }
}
