import React, { Component } from "react";
import Link from "next/link";
import { Container, Col, Row } from "reactstrap";
import SvgLoader from "bv-react-svgloader";
import "./ready.scss";
export default class Ready extends Component {
  render() {
    return (
      <Container>
        <Row className="mt-3 mb-3">
          <Col md={12}>
            <div className="country">
              <Link href="/country/usa">
                <a>
                  {this.props.country == "usa" ? (
                    <SvgLoader src="/static/svgs/country/usa2.svg" />
                  ) : (
                    <SvgLoader src="/static/svgs/country/usa.svg" />
                  )}
                </a>
              </Link>
              <Link href="/country/uk">
                <a>
                  {this.props.country == "uk" ? (
                    <SvgLoader src="/static/svgs/country/uk2.svg" />
                  ) : (
                    <SvgLoader src="/static/svgs/country/uk.svg" />
                  )}
                </a>
              </Link>
              <Link href="/country/canada">
                <a>
                  {this.props.country == "canada" ? (
                    <SvgLoader src="/static/svgs/country/canada2.svg" />
                  ) : (
                    <SvgLoader src="/static/svgs/country/canada.svg" />
                  )}
                </a>
              </Link>
              <Link href="/country/australia">
                <a>
                  {this.props.country == "australia" ? (
                    <SvgLoader src="/static/svgs/country/australia2.svg" />
                  ) : (
                    <SvgLoader src="/static/svgs/country/australia.svg" />
                  )}
                </a>
              </Link>
              <Link href="/country/germany">
                <a>
                  {this.props.country == "germany" ? (
                    <SvgLoader src="/static/svgs/country/germany2.svg" />
                  ) : (
                    <SvgLoader src="/static/svgs/country/germany.svg" />
                  )}
                </a>
              </Link>
              <Link href="/country/sa">
                <a>
                  {this.props.country == "sa" ? (
                    <SvgLoader src="/static/svgs/country/sa2.svg" />
                  ) : (
                    <SvgLoader src="/static/svgs/country/sa.svg" />
                  )}
                </a>
              </Link>
              <Link href="/country/uae">
                <a>
                  {this.props.country == "uae" ? (
                    <SvgLoader src="/static/svgs/country/uae2.svg" />
                  ) : (
                    <SvgLoader src="/static/svgs/country/uae.svg" />
                  )}
                </a>
              </Link>
              <Link href="/country/nigeria">
                <a>
                  {this.props.country == "nigeria" ? (
                    <SvgLoader src="/static/svgs/country/nigeria2.svg" />
                  ) : (
                    <SvgLoader src="/static/svgs/country/nigeria.svg" />
                  )}
                </a>
              </Link>
            </div>
          </Col>
          <Col md={12}>
            <div className="text-justify bg-primary text-center p-4 readyText">
              <h2>
                Ready to discuss your project ?{" "}
                <Link href="/registration" prefetch>
                  <a className="pl-3 pr-3 pt-1 pb-1">Click Here</a>
                </Link>
              </h2>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
