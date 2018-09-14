import React, { Component } from "react";
import Banner from "../components/Header/Banner";
import Layout from "../components/Layout";
import Title from "../components/About/Title";
import Ready from "../components/Footer/Ready";
import ExecutivePosition from "../components/ExecutivePosition";

export default class extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Banner />
        <Title title="EXECUTIVE POSITION" />
        <ExecutivePosition />
        <Ready />
      </Layout>
    );
  }
}
