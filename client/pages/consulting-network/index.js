import React, { Component } from "react";
import Head from 'next/head' ;
import Banner from "../../components/cn/Header/Banner";
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
        <Head><title>Blue Mountain Consulting Network - Home </title></Head>
        <Banner bgImage="cn/cnbg" />
        <FindUs />
        <ImageContent />
        <ServiceRow />
        <FooterTop />
      </Layout>
    );
  }
}
