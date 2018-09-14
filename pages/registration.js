import React, { Component } from "react";
import Banner from "../components/Header/Banner";
import FullText2 from "../components/Assessment/FullText2";
import Layout from "../components/Layout";
import Title from "../components/About/Title";
import Ready from "../components/Footer/Ready";

export default class extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Banner />
        <Title title="REGISTRATION" />
        <FullText2 />
        <Ready />
      </Layout>
    );
  }
}
