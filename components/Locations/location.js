import React, { Component, Fragment } from "react";
import SvgLoader from "bv-react-svgloader";
import Link from "next/link";
import { Container, Col, Row } from "reactstrap";
import './style.scss' ;

export default class Location extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <Fragment>
        <Container style={{margin: 'auto'}}>
          <Row style={{ marginBottom: "30px" }}>
            <Col md={12} style={{ overflow : 'hidden'}}>
              <SvgLoader  src="/static/svgs/images/locationmap.svg" />
            </Col>
          </Row>
          <Row className="grid">
            <div>
              <Link href="/country/usa" prefetch>
                <a>
                  <SvgLoader src="/static/svgs/country/usa.svg" />
                </a>
              </Link>
            </div>
            <div>
              <Link href="/country/uk" prefetch>
                <a>
                  <SvgLoader src="/static/svgs/country/uk.svg" />
                </a>
              </Link>
            </div>
            <div>
              <Link href="/country/australia" prefetch>
                <a>
                  <SvgLoader src="/static/svgs/country/australia.svg" />
                </a>
              </Link>
            </div>
            <div>
              <Link href="/country/canada" prefetch>
                <a>
                  <SvgLoader src="/static/svgs/country/canada.svg" />
                </a>
              </Link>
            </div>
         
            <div>
              <Link href="/country/sa" prefetch>
                <a>
                  <SvgLoader src="/static/svgs/country/sa.svg" />
                </a>
              </Link>
            </div>
            <div>
              <Link href="/country/uae" prefetch>
                <a>
                  <SvgLoader src="/static/svgs/country/uae.svg" />
                </a>
              </Link>
            </div>
            <div>
              <Link href="/country/germany" prefetch>
                <a>
                  <SvgLoader src="/static/svgs/country/germany.svg" />
                </a>
              </Link>
            </div>
            <div>
              <Link
                href="/country/nigeria prefetch"
                style={{ backgroundColor: "red", margin: "auto" }}
              >
                <a>
                  <SvgLoader src="/static/svgs/country/nigeria.svg" />
                </a>
              </Link>
            </div>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
