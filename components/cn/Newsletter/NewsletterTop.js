import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SvgLoader from "bv-react-svgloader";

export default class NewsletterTop extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col md={7}>
              <div
                style={{
                  backgroundColor: "#E5CE00",
                  padding: "20px"
                }}
              >
                <h3 style={{ fontWeight: "bold" }}>BLUE MOUNTAIN NEWSLETTER</h3>
                <p>Sign up to our newsletter here</p>
              </div>
            </Col>
            <Col md={5}>
              <div
                style={{
                  backgroundColor: "#0069D1",
                  padding: "20px",
                  color: "#fff",
                  textAlign: "center",
                  width: "80%"
                }}
              >
                <SvgLoader src="/static/svgs/images/cn/email.svg" />
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
