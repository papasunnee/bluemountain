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
            <div className="text-justify bg-primary text-center p-4 readyText">
              Ready to discuss your project ?{" "}
              <Link href="/registration" prefetch>
                <a className="pl-3 pr-3 pt-1 pb-1">CLICK HERE</a>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export const Flags = props => {
  return (
    <div className="country">
      <Link href="/country/usa">
        <a>
          {props.country == "usa" ? (
            <SvgLoader src="/static/svgs/country/usa2.svg" />
          ) : (
            <SvgLoader src="/static/svgs/country/usa.svg" />
          )}
        </a>
      </Link>
      <Link href="/country/uk">
        <a>
          {props.country == "uk" ? (
            <SvgLoader src="/static/svgs/country/uk2.svg" />
          ) : (
            <SvgLoader src="/static/svgs/country/uk.svg" />
          )}
        </a>
      </Link>
      <Link href="/country/canada">
        <a>
          {props.country == "canada" ? (
            <SvgLoader src="/static/svgs/country/canada2.svg" />
          ) : (
            <SvgLoader src="/static/svgs/country/canada.svg" />
          )}
        </a>
      </Link>
      <Link href="/country/australia">
        <a>
          {props.country == "australia" ? (
            <SvgLoader src="/static/svgs/country/australia2.svg" />
          ) : (
            <SvgLoader src="/static/svgs/country/australia.svg" />
          )}
        </a>
      </Link>
      <Link href="/country/germany">
        <a>
          {props.country == "germany" ? (
            <SvgLoader src="/static/svgs/country/germany2.svg" />
          ) : (
            <SvgLoader src="/static/svgs/country/germany.svg" />
          )}
        </a>
      </Link>
      <Link href="/country/sa">
        <a>
          {props.country == "sa" ? (
            <SvgLoader src="/static/svgs/country/sa2.svg" />
          ) : (
            <SvgLoader src="/static/svgs/country/sa.svg" />
          )}
        </a>
      </Link>
      <Link href="/country/uae">
        <a>
          {props.country == "uae" ? (
            <SvgLoader src="/static/svgs/country/uae2.svg" />
          ) : (
            <SvgLoader src="/static/svgs/country/uae.svg" />
          )}
        </a>
      </Link>
      <Link href="/country/nigeria">
        <a>
          {props.country == "nigeria" ? (
            <SvgLoader src="/static/svgs/country/nigeria2.svg" />
          ) : (
            <SvgLoader src="/static/svgs/country/nigeria.svg" />
          )}
        </a>
      </Link>
    </div>
  );
};
