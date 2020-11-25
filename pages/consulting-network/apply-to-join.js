import React, { Component } from "react";
import Head from "next/head";
import Banner2 from "../../components/cn/Header/Banner2";
import Banner from "../../components/cn/Header/Banner";
import ApplyTop from "../../components/cn/Apply/ApplyTop";
import ApplyForm from "../../components/cn/Apply/ApplyForm";
import Layout from "../../components/cn/Layout";

export default class extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Head>
          <title>
            Blue Mountain Consulting Network - Apply To Join Network
          </title>
        </Head>
        <Banner bgImage="cn/cnbg2" />
        <ApplyTop />
        <ApplyForm />
      </Layout>
    );
  }
}
