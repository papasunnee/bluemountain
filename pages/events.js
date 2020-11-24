import React, { Component } from "react";
import Head from "next/head";
import EventTop from "../components/cn/Event/EventTop";
import Banner from "../components/Header/Banner";
import Layout from "../components/Layout";

export default class extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Head>
          <title>
            Blue Mountain Consulting Network - Events, Seminars & Lectures
          </title>
        </Head>

        <Banner bgImage="contact" min />
        <div className="my-5 pb-4"></div>
        <EventTop />
        <div className="my-5 pb-4"></div>
      </Layout>
    );
  }
}
