import React, { Component } from "react";
import Banner from "../components/Header/Banner";
import Layout from "../components/Layout";
import Global from "../components/Global/Global";
import ContactText from "../components/Contact/ContactText";

export default class extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Banner bgImage="about" min />
        <ContactText />
        <Global title="News Update" />
      </Layout>
    );
  }
}
