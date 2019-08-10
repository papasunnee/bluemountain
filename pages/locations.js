import React, { Component } from "react";
import Banner from "../components/Header/Banner";
import Layout from "../components/Layout";
import Location from "../components/Locations/location";

export default class extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Banner bgImage="locations" />
        <Location />
      </Layout>
    );
  }
}
