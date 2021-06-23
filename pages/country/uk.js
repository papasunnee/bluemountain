import React, { Component } from "react";
import Banner from "../../components/Header/Banner";
import FullText from "../../components/About/FullText";
import ServiceRow from "../../components/Country/ServiceRow";
import Layout from "../../components/Layout";
import Title from "../../components/About/Title";
import Ready from "../../components/Footer/Ready";

export default class extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Banner bgImage="uk" />
        <Title title="UK" country="uk" />
        <FullText bgColor="red" />
        <ServiceRow />
        <Ready country="uk" />
      </Layout>
    );
  }
}
