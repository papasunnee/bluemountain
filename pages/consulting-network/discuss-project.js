import React, { Component } from "react";
import Head from "next/head";
import Banner2 from "../../components/cn/Header/Banner2";
import DiscussTop from "../../components/cn/Discuss/DiscussTop";
import DiscussForm from "../../components/cn/Discuss/DiscussForm";
import Layout from "../../components/cn/Layout";

export default class extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Head>
          <title>Blue Mountain Consulting Network - Discuss Your Project</title>
        </Head>
        <Banner2
          bgImage="cn/cnbg2"
          title1="DISCUSS YOUR PROJECT WITH US"
          subtitle="Take advantage of the expertise and flexibility provided by independent consultants."
        />
        <DiscussTop />
        <DiscussForm />
      </Layout>
    );
  }
}
