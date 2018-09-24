import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import SvgLoader from "bv-react-svgloader";

export default class ServiceRow extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Container fluid style={{ marginTop: "30px" }}>
          <Row>
            <Col xs="12" md="4">
              <div
                style={{
                  backgroundColor: "#0084B4",
                  height: "300px"
                }}
              >
                <p
                  className="display-6 text-center"
                  style={{
                    color: "#fff",
                    lineHeight: "300px",
                    textTransform: "uppercase"
                  }}
                >
                  Lorem Ipsum Dolor
                </p>
              </div>
            </Col>
            <Col xs="12" md="4">
              <div
                style={{
                  backgroundColor: "#E5E5E5",
                  height: "300px"
                }}
              >
                <p
                  className="display-6 text-center"
                  style={{
                    color: "#0069D1",
                    lineHeight: "300px",
                    textTransform: "uppercase"
                  }}
                >
                  Lorem Ipsum Dolor
                </p>
              </div>
            </Col>
            <Col xs="12" md="4">
              <div
                style={{
                  backgroundColor: "#0084B4",
                  height: "300px"
                }}
              >
                <p
                  className="display-6 text-center"
                  style={{
                    color: "#fff",
                    lineHeight: "300px",
                    textTransform: "uppercase"
                  }}
                >
                  Lorem Ipsum Dolor
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
