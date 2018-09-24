import React, { Component, Fragment } from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import "./footer.scss";
import {
  faEnvelope,
  faSearch,
  faPhone,
  faBars
} from "@fortawesome/fontawesome-free-solid";
import SvgLoader from "bv-react-svgloader";
export default class Footer extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <div>
          <footer>
            <Container>
              <Row>
                <Col md="4" xs="12" className="footerLogo">
                  <Link href="/consulting-network" prefetch>
                    <a>
                      <SvgLoader src="/static/svgs/images/yellowmount.svg" />
                    </a>
                  </Link>
                  <div style={{ marginTop: "20px" }}>
                    <p>
                      <a href="" style={{ fontWeight: "bold" }}>
                        Privacy Policy
                      </a>{" "}
                      | <a href="">Terms and Condition</a>
                    </p>
                    <p>Blue Mountain 2018. All Rights Reserved.</p>
                  </div>
                </Col>
                <Col md="4" xs="12" className="follow">
                  <h4 style={{ fontWeight: "bold" }}>FOLLOW US</h4>
                  <div className="socials">
                    <div className="linkedIn">
                      <img src="/static/social/linkedin.png" />
                    </div>
                    <div className="google">
                      <img src="/static/social/google.png" />
                    </div>
                    <div className="twitter">
                      <img src="/static/social/twitter.png" />
                    </div>
                  </div>
                </Col>
                <Col md="4" xs="12" className="bmcn">
                  <Link href="/">
                    <a>
                      <SvgLoader src="/static/svgs/images/logo.svg" />
                    </a>
                  </Link>
                </Col>
              </Row>
            </Container>
          </footer>
        </div>
      </Fragment>
    );
  }
}
