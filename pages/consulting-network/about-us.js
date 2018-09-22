import React, { Component } from "react";
import Head from "next/head";
import Banner2 from "../../components/cn/Header/Banner2";
import FindUs from "../../components/cn/Row/FindUs";
import ImageContent from "../../components/cn/Row/ImageContent";
import ServiceRow from "../../components/cn/Row/ServiceRow";
import FooterTop from "../../components/cn/Row/FooterTop";
import Layout from "../../components/cn/Layout";

export default class extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Head>
          <title>Blue Mountain Consulting Network - About Us </title>
        </Head>
        <Banner2
          bgImage="cn/cnbg2"
          title1="OUR TEAM"
          subtitle="Bringing together experience from across multiple sectors and regions"
        />
        <ImageContent />
        <ServiceRow />
        <FooterTop />
      </Layout>
    );
  }
}
