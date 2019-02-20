import React, { Component, Fragment } from "react";
import { Container, Col, Row } from "reactstrap";
import Link from "next/link";
import Insight from "./Insight";
import "../Footer/ready.scss";
import "./global.scss";

export default class Global extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="pt-5 pb-5" style={{ backgroundColor: "#E5E5E5" }}>
        <Container>
          <Row>
            <Col
              xs={12}
              className="text-primary text-center"
              style={{ fontweight: "bolder" }}
            >
              <h1 className="globalTitle">GLOBAL INSIGHT</h1>
            </Col>
          </Row>
          <Row className="mt-3 mb-3">
            <Col xs={12}>
              <Insight />
            </Col>
          </Row>
          <Row className="mt-3 mb-3">
            <Col xs={12}>
              <div className="text-justify bg-primary text-center p-4 readyText">
                <h2>
                  Ready to discuss your project ?{" "}
                  <Link href="/registration" prefetch>
                    <a className="pl-3 pr-3 pt-1 pb-1">Click Here</a>
                  </Link>
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
