import React, { Component } from "react";
import Banner from "../components/Header/Banner";
import Layout from "../components/Layout";
import ContactText from "../components/Contact/ContactText";

export default class extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Banner bgImage="contact" min />
        <ContactText />
      </Layout>
    );
  }
}
