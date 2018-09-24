import React, { Component } from "react";
import Head from "next/head";
import Banner2 from "../../components/cn/Header/Banner2";
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
        <Banner2
          bgImage="cn/cnbg2"
          title1="APPLY TO JOIN OUR NETWORK"
          subtitle="Enjoy the freedom to choose your projects and get involved in the delivery of exceptional results"
        />
        <ApplyTop />
        <ApplyForm />
      </Layout>
    );
  }
}
