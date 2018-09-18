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
                <Col md="4" xs="12" className="text-left">
                  <SvgLoader src="/static/svgs/images/logo.svg" />
                  <div style={{marginTop : '20px'}}>
                  <p><a href="" style={{ fontWeight: "bold" }}>
                    Privacy Policy
                  </a>{" "} | <a href="">Terms and Condition</a></p>
                  <p>Blue Mountain 2018. All Rights Reserved.</p>
                  </div>
                </Col>
                <Col md="4" xs="12" className="text-center">
                  <h4 style={{ fontWeight: "bold" }}>FOLLOW US</h4>
                  <div className="socials">
                    <div style={{ backgroundColor: "#0077B5" }}>
                      <img src="/static/social/linkedin.png"/>
                    </div>
                    <div style={{ backgroundColor: "#C71610" }}>
                    <img src="/static/social/google.png"/>
                    </div>
                    <div style={{ backgroundColor: "#0084B4" }}>
                    <img src="/static/social/twitter.png"/>
                    </div>
                  </div>
                </Col>
                <Col md="4" xs="12" >
                <SvgLoader src="/static/svgs/images/yellowmount.svg" />
                </Col>
              </Row>
            </Container>
          </footer>
          <style jsx>{`
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
            p{
              font-size : 12px ;
            }
          `}</style>
        </div>
      </Fragment>
    );
  }
}
