import React, { Component, Fragment } from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import "./footer.scss";
import SvgLoader from "bv-react-svgloader";
export default class Footer extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <div>
          <footer>
            <Container fluid>
              <Row>
                <Col md="3" xs="12" className="follow">
                  <h4 style={{ fontWeight: "bold" }}>FOLLOW US</h4>
                  <div className="socials">
                    <div className="linkedIn">
                      <img src="/static/social/linkedin.png" />
                    </div>
                    <div className="youtube">Y</div>
                    <div className="twitter">
                      <img src="/static/social/twitter.png" />
                    </div>
                  </div>
                </Col>

                <Col md="3" xs="12" className="bmcn">
                  <Link href="/university">
                    <a>
                      <img
                        className="img-fluid"
                        src="/static/images/footer/bmu.png"
                      />
                    </a>
                  </Link>
                </Col>
                <Col md="3" xs="12" className="bmcn">
                  <Link href="/">
                    <a>
                      <SvgLoader src="/static/svgs/images/logo.svg" />
                    </a>
                  </Link>
                </Col>
              </Row>
            </Container>
          </footer>
          <Container fluid className="py-3 footerLogo">
            <Row>
              <Col xs={12} className="">
                <Link href="/consulting-network" prefetch>
                  <a>
                    <SvgLoader src="/static/svgs/images/yellowmount.svg" />
                  </a>
                </Link>
                <p
                  style={{
                    marginTop: "20px",
                    display: "inline-block",
                    color: "#fff",
                  }}
                >
                  <Link href="/privacy-policy">
                    <a>Privacy Policy </a>
                  </Link>
                  |
                  <Link href="/terms-and-condition">
                    <a>Terms and Condition</a>
                  </Link>
                  Blue Mountain 2020. All Rights Reserved.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}
