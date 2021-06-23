import React, { Component } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import NewsletterTop from "../components/cn/Newsletter/NewsletterTop";
import NewsletterForm from "../components/cn/Newsletter/NewsletterForm";
import Banner from "../components/Header/Banner";

export default class extends Component {
  state = {};
  render() {
    return (
      <Layout noNewsLetter>
        <Head>
          <title>Blue Mountain Consulting Network - Newsletter</title>
        </Head>
        <Banner bgImage="about" min />
        <div className="my-5 pb-5"></div>
        <NewsletterTop />
        <NewsletterForm />
      </Layout>
    );
  }
}
