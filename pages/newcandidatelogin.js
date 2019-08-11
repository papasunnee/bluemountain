import React, { Component } from "react";
import Link from "next/link";
import { Col, Row } from "reactstrap";
import Banner from "../components/Header/Banner";
import Layout from "../components/Layout";

export default class extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Banner
          subtitle="More about Blue Mountain >"
          title1="THE PATH TO LEADERSHIP STARTS HERE"
        >
          <Row>
            <Col md={{ size: 4, offset: 4 }} className="text-center">
              <form
                onSubmit={e => {
                  e.preventDefault();
                  alert("Under Construction");
                }}
              >
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    name="firstname"
                    id=""
                    required
                    placeholder="Firstname"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    name="lastname"
                    id=""
                    required
                    placeholder="Lastname"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    name="email"
                    id=""
                    required
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    name="password"
                    id=""
                    required
                    placeholder="Password"
                  />
                </div>
                <div className="form-group">
                  <button
                    style={{
                      backgroundColor: "#0069D1",
                      borderRadius: "30px",
                      fontWeight: "bold",
                      border: "none",
                      padding: "5px 70px",
                      cursor: "pointer",
                      outline: "none",
                      color: "#fff"
                    }}
                  >
                    SIGN UP
                  </button>
                </div>
                <p style={{ color: "#fff" }}>
                  Do you have an account already ?
                  <Link href="">
                    <a
                      style={{
                        color: "rgba(229, 206, 0, 0.95)",
                        textDecoration: "none"
                      }}
                    >
                      {" "}
                      Login
                    </a>
                  </Link>
                </p>
              </form>
            </Col>
          </Row>
        </Banner>
      </Layout>
    );
  }
}
