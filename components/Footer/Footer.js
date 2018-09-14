import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                <Col>
                  <SvgLoader src="/static/svgs/images/logo.svg" />
                  <p>Blue Mountain 2018. All Rights Reserved.</p>
                </Col>
                <Col className="text-center">
                  <h4 style={{ fontWeight: "bold" }}>FOLLOW US</h4>
                  <div className="socials">
                    <div style={{ backgroundColor: "#0077B5" }}>
                      <FontAwesomeIcon icon={faSearch} size="lg" />
                    </div>
                    <div style={{ backgroundColor: "#C71610" }}>
                      <FontAwesomeIcon icon={faSearch} size="lg" />
                    </div>
                    <div style={{ backgroundColor: "#0084B4" }}>
                      <FontAwesomeIcon icon={faSearch} size="lg" />
                    </div>
                  </div>
                </Col>
                <Col style={{ lineHeight: "60px" }}>
                  <a href="" style={{ fontWeight: "bold" }}>
                    Privacy Policy
                  </a>{" "}
                  | <a href="">Terms and Condition</a>
                </Col>
              </Row>
            </Container>
          </footer>
          <style jsx>{`
            a {
              color: #fff;
              text-decoration: none;
            }
            a {
              color: #fff;
              text-decoration: none;
            }
            footer {
              text-align: center;
              background-color: #031928;
              padding: 60px;
              color: #fff;
            }
            .socials {
              display: flex;
              justify-content: center;
            }
            .socials div {
              width: 40px;
              height: 40px;
              border-radius: 50%;
              margin-left: 10px;
              margin-right: 10px;
              padding: 7px;
            }
          `}</style>
        </div>
      </Fragment>
    );
  }
}
