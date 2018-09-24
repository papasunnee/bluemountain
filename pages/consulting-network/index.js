import React, { Component } from "react";
import Head from "next/head";
import Link from "next/link";
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
        <Head>
          <title>Blue Mountain Consulting Network - Home </title>
        </Head>
        <Banner bgImage="cn/cnbg" />
        <FindUs />
        <ImageContent />
        <ServiceRow />
        <FooterTop>
          <div
            style={{
              width: "60%",
              top: "80px ",
              left: "80px",
              marginTop: "40px"
            }}
          >
            <h2>LOREM IPSUM</h2>
            <p style={{ fontSize: "15px", margin: "40px 0px" }}>
              Aliquam ante. Nunc dapibus tortor vel mi dapibus sollicitudin.
              Nulla quis diam. Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse quam.
            </p>
            <p>
              <Link href="" prefetch>
                <a
                  style={{
                    backgroundColor: "#E5CE00",
                    color: "#000",
                    fontWeight: "bold",
                    fontSize: "12px",
                    padding: " 5px 10px ",
                    display: "inline-block",
                    borderRadius: "5px",
                    textDecoration: "none"
                  }}
                >
                  Meet our consultants
                </a>
              </Link>
            </p>
          </div>
        </FooterTop>
      </Layout>
    );
  }
}
