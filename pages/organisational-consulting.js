import React, { Component } from "react";
import Banner from "../components/Header/Banner";
import Layout from "../components/Layout";
import ManagementRow from "../components/Management/managementRow";
import ConsultingText from "../components/Consulting/ConsultingText";

export default class extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Banner bgImage="about" min />
        <ConsultingText title="ORGANIZATIONAL CONSULTING" />
        <ManagementRow title="Management Team" />
      </Layout>
    );
  }
}
