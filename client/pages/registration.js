import React, { Component, Fragment } from "react";
import Router from "next/router";
import Head from "next/head";
import { Container, Jumbotron } from "reactstrap";
import Nav from "../components/Header/Nav";
import NProgress from "nprogress";
import Link from "next/link";
import "../scss/style.scss";
import "../components/About/title.scss";

// progress bar
Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default class Registration extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Head>
          <link rel="stylesheet" href="/static/css/nprogress.css" />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:300,400,600,700,800"
            rel="stylesheet"
          />
        </Head>
        <Container
          fluid
          style={{
            paddingLeft: "0px",
            paddingRight: "0px"
          }}
        >
          <Banner subtitle="More about Blue Mountain >" />
        </Container>
      </Fragment>
    );
  }
}

const Banner = props => {
  const banner = props.bgImage || "headerbg";
  return (
    <div>
      <Jumbotron
        className="jumboDemo"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundImage: `url(/static/svgs/images/${banner}.svg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderRadius: "0px",
          paddingTop: "10rem",
          paddingBottom: "0.5rem",
          paddingTop: "0px",
          height: "100vh",
          padding: "0px"
        }}
      >
        <div>
          <Nav />
          <div className="hr-sect" style={{ color: "#fff" }}>
            REGISTRATION
          </div>
        </div>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2
              className="display-5"
              style={{
                color: "#fff",
                fontWeight: "bold"
              }}
            >
              To Register as
              <span style={{ display: "block", lineHeight: "2" }}>
                {" "}
                an Executive Candidate
              </span>
              <Link href="/candidate" prefetch>
                <a
                  style={{
                    color: "#000",
                    fontSize: "15px",
                    backgroundColor: "#E5CE00",
                    padding: "5px 10px",
                    fontWeight: "bold",
                    textDecoration: "none"
                  }}
                >
                  Click Here
                </a>
              </Link>
            </h2>
            <h2
              className="display-5"
              style={{
                color: "#fff",
                textAlign: "right",
                fontWeight: "bold"
              }}
            >
              To Register as
              <span style={{ display: "block", lineHeight: "2" }}>
                {" "}
                an Organisation
              </span>
              <Link href="/organization" prefetch>
                <a
                  style={{
                    color: "#fff",
                    fontSize: "15px",
                    backgroundColor: "#0077B5",
                    padding: "5px 10px",
                    fontWeight: "bold",
                    textDecoration: "none"
                  }}
                >
                  Click Here
                </a>
              </Link>
            </h2>
          </div>
        </div>
        <div style={{ marginLeft: "20px" }}>
          <p
            style={{
              color: "yellow",
              fontWeight: "bold",
              textTransform: "uppercase"
            }}
          >
            {props.subtitle}
          </p>
        </div>
      </Jumbotron>
    </div>
  );
};
