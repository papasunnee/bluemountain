import React, { Component } from "react";
import Banner from "../components/Header/Banner";
import Layout from "../components/Layout";
import Title from "../components/About/Title";
import Ready from "../components/Footer/Ready";
import Location from "../components/Locations/location";

export default class extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Banner bgImage="locations" />
        <Title title="LOCATIONS" />
        <Location />
      </Layout>
    );
  }
}
