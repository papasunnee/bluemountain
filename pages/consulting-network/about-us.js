import React, { Component } from "react";
import Head from "next/head";
import Banner2 from "../../components/cn/Header/Banner2";
import AboutTop from "../../components/cn/About/AboutTop";
import FooterTop2 from "../../components/cn/Row/FooterTop2";
import Layout from "../../components/cn/Layout";
import PersonArray from "../../components/cn/About/PersonArray";

export default class extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Head>
          <title>Blue Mountain Consulting Network - About Us </title>
        </Head>
        <Banner2
          jpg
          bgImage="about"
          title1="OUR TEAM"
          subtitle="Bringing together experience from across multiple sectors and regions"
        />
        <AboutTop />
        <FooterTop2 />
      </Layout>
    );
  }
}
