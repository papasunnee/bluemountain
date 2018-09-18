import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import Video from "./Video";
import DoubleParagraph from "./DoubleParagaph";

export default class extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Container style={{ margin: "80px auto" }}>
          <Row>
            <Col xs="12">
              <h3 className="text-primary text-center mb-4">
                <span style={{ fontWeight: "bold", display: "block" }}>
                  Top Executive Retained Search Firm
                </span>
                Learn how our trusted executive search consultants can help you
              </h3>
            </Col>
            <Col md="6" sm="12">
              <div className="darker" />
            </Col>
            <Col md="6" sm="12">
              <DoubleParagraph />
            </Col>
            <Col md="6" sm="12">
              <DoubleParagraph />
            </Col>
            <Col md="6" sm="12">
              <Video />
            </Col>
          </Row>
        </Container>
        <style jsx>
          {`
            .darker {
              height: 300px;
              background-color: #b2b2b2;
              transition: all linear 200ms;
            }
            .darker:hover {
              background-color: #8e8e8e;
            }
          `}
        </style>
      </Fragment>
    );
  }
}
