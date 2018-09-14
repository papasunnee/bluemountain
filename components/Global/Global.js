import React, { Component, Fragment } from "react";
import { Container, Col, Row } from "reactstrap";
import Insight from "./Insight";

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
              <h1 style={{ fontSize: "3em" }}>GLOBAL INSIGHT</h1>
            </Col>
          </Row>
          <Row className="mt-3 mb-3">
            <Col xs={12}>
              <Insight />
            </Col>
          </Row>
          <Row className="mt-3 mb-3">
            <Col xs={12}>
              <div
                className="text-justify bg-primary text-center p-4"
                style={{ color: "#fff" }}
              >
                <h2>
                  Ready to discuss your project ?{" "}
                  <a
                    href=""
                    className="pl-3 pr-3 pt-1 pb-1"
                    style={{
                      backgroundColor: "#E5CE00",
                      color: "#fff",
                      textDecoration: "none",
                      borderRadius: "3px"
                    }}
                  >
                    Click Here
                  </a>
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
