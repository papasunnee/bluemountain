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
            <Col md="6" sm="12">
              <h6 className="text-primary mb-4">
                <span style={{ fontWeight: "bold", display: "block" }}>
                  Top Executive Retained Search Firm
                </span>
                Learn how our trusted executive search consultants can help you
              </h6>
              <DoubleParagraph />
            </Col>
            <Col md="6" sm="12">
              <div className="darker" />
            </Col>
          </Row>
        </Container>
        <style jsx>
          {`
            .darker {
              height: 386px;
              background-color: #b2b2b2;
              background-image: url(/static/svgs/images/topexecutive.svg);
              background-position: center center;
              background-size: 100% 100%;
              background-repeat: no-repeat;
              transition: all linear 200ms;
              position: relative;
            }
            .darker::before {
              content: "";
              width: 100%;
              height: 100%;
              position: absolute;
              border-radius: 50%;
              background-colot: transparent;
              box-shadow: 0px 0px 55px -9px rgba(0, 0, 0, 0.75);
              z-index: -1;
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
