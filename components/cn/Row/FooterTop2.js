import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

export default class FooterTop2 extends Component {
  render() {
    return (
      <Fragment>
        <section className="imageBg">
          <Container>
            <Row>
              <Col md={6}>
                <div className="imageBg1">
                  <h2>LOREM IPSUM</h2>
                  <p style={{ fontSize: "15px", margin: "40px 0px" }}>
                    Aliquam ante. Nunc dapibus tortor vel mi dapibus
                    sollicitudin. Nulla quis diam. Quis autem vel eum iure
                    reprehenderit qui in ea voluptate velit esse quam.
                  </p>
                  <p>
                    <Link href="/consulting-network/discuss-project" prefetch>
                      <a
                        style={{
                          backgroundColor: "#E5CE00",
                          color: "#000",
                          fontWeight: "bold",
                          fontSize: "12px",
                          padding: " 5px 10px ",
                          display: "inline-block",
                          borderRadius: "5px",
                          textDecoration: "none"
                        }}
                      >
                        Discuss Your Project With Us
                      </a>
                    </Link>
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className="imageBg2">
                  <h2>LOREM IPSUM</h2>
                  <p style={{ fontSize: "15px", margin: "40px 0px" }}>
                    Aliquam ante. Nunc dapibus tortor vel mi dapibus
                    sollicitudin. Nulla quis diam. Quis autem vel eum iure
                    reprehenderit qui in ea voluptate velit esse quam.
                  </p>
                  <p>
                    <Link href="/consulting-network/apply-to-join" prefetch>
                      <a
                        style={{
                          backgroundColor: "#DD071C",
                          color: "#fff",
                          fontWeight: "bold",
                          fontSize: "12px",
                          padding: " 5px 10px ",
                          display: "inline-block",
                          borderRadius: "5px",
                          textDecoration: "none"
                        }}
                      >
                        Apply to Join our network
                      </a>
                    </Link>
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <style jsx>{`
          .imageBg {
            color: #fff;
            position: relative;
            height: 400px;
            background: #0052b4;
            overflow: hidden;
          }
          .imageBg1,
          .imageBg2 {
            background-repeat: no-repeat;
            background-position: right bottom;
            width: 100%;
            padding-top: 50px;
            padding-bottom: 50px;
            margin-top: 93px;
          }
          .imageBg1 {
            background-image: url("/static/svgs/images/cn/footer1.svg");
          }
          .imageBg2 {
            background-image: url("/static/svgs/images/cn/footer2.svg");
          }
        `}</style>
      </Fragment>
    );
  }
}
