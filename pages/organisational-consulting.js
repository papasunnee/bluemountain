import React, { Component } from "react";
import Banner from "../components/Header/Banner";
import Layout from "../components/Layout";
import Global from "../components/Global/Global";
import ConsultingOrganization from "../components/Consulting/ConsultingOrganization";

export default class extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Banner bgImage="about" min />
        <ConsultingOrganization title="ORGANIZATIONAL CONSULTING" />
        <Global title="GLOBAL INSIGHT" />
      </Layout>
    );
  }
}
