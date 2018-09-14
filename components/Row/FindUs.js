import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import SvgLoader from "bv-react-svgloader";

export default class FindUs extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Container fluid>
          <Row>
            <Col xs="12" md="6">
              <div className="parent">
                <div className="child">
                  <h3
                    className="display-6 text-center"
                    style={{
                      color: "#fff",
                      lineHeight: "300px",
                      textTransform: "uppercase"
                    }}
                  >
                    Find Us Around The World
                  </h3>
                  <a
                    href=""
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      marginLeft: "20px",
                      color: "#fff"
                    }}
                  >
                    View All Loctions
                  </a>
                </div>
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
        <style jsx>{`
          .parent {
            height: 300px;
            background-color: #00f;
            overflow: hidden;
          }
          .child {
            width: 100%;
            height: inherit;
            background-image: url("/static/svgs/images/world.svg");
            background-position: center;
            background-size: cover;
            transition: all linear 250ms;
          }
          .parent:hover .child,
          .parent:focus .child {
            transform: scale(1.1);
          }
        `}</style>
      </Fragment>
    );
  }
}
