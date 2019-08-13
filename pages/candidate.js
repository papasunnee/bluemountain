import React, { Component } from "react";
import Banner from "../components/Header/Banner";
import FullText3 from "../components/Assessment/FullText3";
import Layout from "../components/Layout";
import Ready from "../components/Footer/Ready";

export default class extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Banner bgImage="about" min />
        <FullText3 />
        <Ready
          text="Hoping to view our list of featured vacancies?"
          href="/featured-vacancies"
        />
      </Layout>
    );
  }
}
