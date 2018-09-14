import React, { Component, Fragment } from "react";
import SvgLoader from "bv-react-svgloader";
import Link from "next/link";
import { Container, Col, Row } from "reactstrap";

export default class Location extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <Fragment>
        <Container>
          <Row style={{ marginBottom: "30px" }}>
            <Col md={12}>
              <SvgLoader src="/static/svgs/images/locationmap.svg" />
            </Col>
          </Row>
          <Row style={{ marginBottom: "30px" }}>
            <Col md={3} xs={12}>
              <Link href="/country/usa">
                <a>
                  <SvgLoader src="/static/svgs/country/usa.svg" />
                </a>
              </Link>
            </Col>
            <Col md={3} xs={12}>
              <Link href="/country/uk">
                <a>
                  <SvgLoader src="/static/svgs/country/uk.svg" />
                </a>
              </Link>
            </Col>
            <Col md={3} xs={12}>
              <Link href="/country/australia">
                <a>
                  <SvgLoader src="/static/svgs/country/australia.svg" />
                </a>
              </Link>
            </Col>
            <Col md={3} xs={12}>
              <Link href="/country/canada">
                <a>
                  <SvgLoader src="/static/svgs/country/canada.svg" />
                </a>
              </Link>
            </Col>
          </Row>
          <Row style={{ marginBottom: "30px" }}>
            <Col md={3} xs={12}>
              <Link href="/country/sa">
                <a>
                  <SvgLoader src="/static/svgs/country/sa.svg" />
                </a>
              </Link>
            </Col>
            <Col md={3} xs={12}>
              <Link href="/country/uae">
                <a>
                  <SvgLoader src="/static/svgs/country/uae.svg" />
                </a>
              </Link>
            </Col>
            <Col md={3} xs={12}>
              <Link href="/country/germany">
                <a>
                  <SvgLoader src="/static/svgs/country/germany.svg" />
                </a>
              </Link>
            </Col>
            <Col md={3} xs={12}>
              <Link
                href="/country/nigeria"
                style={{ backgroundColor: "red", margin: "auto" }}
              >
                <a>
                  <SvgLoader src="/static/svgs/country/nigeria.svg" />
                </a>
              </Link>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
