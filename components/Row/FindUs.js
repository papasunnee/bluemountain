import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import SvgLoader from "bv-react-svgloader";
import "./findus.scss";

export default class FindUs extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Container fluid>
          <Row>
            <Col xs="12" md="6">
              <div className="parent">
                <h3 className="display-6 text-center">
                  Find Us Around The World
                </h3>
                <a href="">View All Loctions</a>
              </div>
            </Col>
            <Col xs="12" md="6">
              <div
                style={{
                  border: "2px solid #0069D1",
                  height: "300px"
                }}
              >
                <h3
                  className="display-6 text-center"
                  style={{
                    color: "#0069D1",
                    marginTop: "110px",
                    textTransform: "uppercase"
                  }}
                >
                  ACCELERATE PERSONAL AND PROFESSIONAL TRANSFORMATION
                </h3>
                <a
                  href=""
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    marginLeft: "20px",
                    color: "#0069D1"
                  }}
                >
                  Register With Us
                </a>
                <a
                  href=""
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "20px"
                  }}
                >
                  <SvgLoader src="/static/svgs/images/logowhite.svg" />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
