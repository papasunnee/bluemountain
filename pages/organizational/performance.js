import React, { Component } from "react";
import ConsultingText from "../../components/Consulting/ConsultingText";
import Banner from "../../components/Header/Banner";
import Layout from "../../components/Layout";
import ManagementRow from "../../components/Management/managementRow";

export default class extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Banner bgImage="about" min />
        <ConsultingText title="PERFORMANCE MANAGEMENT" />
        <ManagementRow title="Management Team" />
      </Layout>
    );
  }
}
