import React, { Component } from "react";
import Head from "next/head";
import Banner2 from "../../components/cn/Header/Banner2";
import NewsletterTop from "../../components/cn/Newsletter/NewsletterTop";
import NewsletterForm from "../../components/cn/Newsletter/NewsletterForm";
import Layout from "../../components/cn/Layout";
import FooterTop2 from "../../components/cn/Row/FooterTop2";

export default class extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Head>
          <title>Blue Mountain Consulting Network - Newsletter</title>
        </Head>
        <Banner2 bgImage="cn/cnbg2" title1="SIGN UP TO OUR NEWSLETTER" />
        <NewsletterTop />
        <NewsletterForm />
        <FooterTop2 />
      </Layout>
    );
  }
}
