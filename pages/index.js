import React, { Component } from "react";
import Head from 'next/head' ;
import Banner from "../components/Header/Banner";
import FindUs from "../components/Row/FindUs";
import ServiceRow from "../components/Row/ServiceRow";
import TextComponent from "../components/Row/TextComponent";
import TopExecutive from "../components/Row/TopExecutive";
import Global from "../components/Global/Global";
import Layout from "../components/Layout";

export default class extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Head><title>Blue Mountain - Home </title></Head>
        <Banner title1="The Path to Leadership" title2="Starts Here" subtitle="More about Blue Mountain >" />
        <FindUs />
        <ServiceRow />
        <TextComponent />
        <TopExecutive />
        <Global />
      </Layout>
    );
  }
}
