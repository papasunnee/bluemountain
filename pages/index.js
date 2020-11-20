import React, { Component } from "react";
import Head from "next/head";
import Banner from "../components/Header/Banner";
import ServiceRow from "../components/Row/ServiceRow";
import TopExecutive from "../components/Row/TopExecutive";
import Global from "../components/Global/Global";
import Layout from "../components/Layout";
import Video from "../components/Row/Video";
import EventTop from "../components/Event/EventTop";

export default class extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Head>
          <title>Blue Mountain - Home </title>
        </Head>
        <Banner
          home
          bgImage="home"
          title1="The Path to Leadership Starts Here"
          subtitle="More about Blue Mountain >"
        />
        <TopExecutive />
        <ServiceRow />
        {/* <Video /> */}
        <EventTop />
        <Global title="GLOBAL INSIGHT" />
      </Layout>
    );
  }
}
