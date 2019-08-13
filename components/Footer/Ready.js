import React from "react";
import Link from "next/link";
import { Container, Col, Row } from "reactstrap";
import SvgLoader from "bv-react-svgloader";
import "./ready.scss";
const Ready = props => {
  return (
    <Container>
      <Row className="mt-3 mb-3">
        <Col md={12}>
          <div className="text-justify bg-primary text-center p-4 readyText">
            {props.text || "Ready to discuss your project ?"}{" "}
            <Link href={props.href || "/registration"} prefetch>
              <a className="pl-3 pr-3 pt-1 pb-1">CLICK HERE</a>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export const Flags = props => {
  return (
    <div className="country">
      <Link href="/country/usa">
        <a onClick={e => props.handleClick(e, "usa")}>
          {props.country == "usa" ? (
            <SvgLoader src="/static/svgs/country/usa2.svg" />
          ) : (
            <SvgLoader src="/static/svgs/country/usa.svg" />
          )}
        </a>
      </Link>
      <Link href="/country/uk">
        <a onClick={e => props.handleClick(e, "uk")}>
          {props.country == "uk" ? (
            <SvgLoader src="/static/svgs/country/uk2.svg" />
          ) : (
            <SvgLoader src="/static/svgs/country/uk.svg" />
          )}
        </a>
      </Link>
      <Link href="/country/canada">
        <a onClick={e => props.handleClick(e, "canada")}>
          {props.country == "canada" ? (
            <SvgLoader src="/static/svgs/country/canada2.svg" />
          ) : (
            <SvgLoader src="/static/svgs/country/canada.svg" />
          )}
        </a>
      </Link>
      <Link href="/country/australia">
        <a onClick={e => props.handleClick(e, "australia")}>
          {props.country == "australia" ? (
            <SvgLoader src="/static/svgs/country/australia2.svg" />
          ) : (
            <SvgLoader src="/static/svgs/country/australia.svg" />
          )}
        </a>
      </Link>
      <Link href="/country/germany">
        <a onClick={e => props.handleClick(e, "germany")}>
          {props.country == "germany" ? (
            <SvgLoader src="/static/svgs/country/germany2.svg" />
          ) : (
            <SvgLoader src="/static/svgs/country/germany.svg" />
          )}
        </a>
      </Link>
      <Link href="/country/sa">
        <a onClick={e => props.handleClick(e, "sa")}>
          {props.country == "sa" ? (
            <SvgLoader src="/static/svgs/country/sa2.svg" />
          ) : (
            <SvgLoader src="/static/svgs/country/sa.svg" />
          )}
        </a>
      </Link>
      <Link href="/country/uae">
        <a onClick={e => props.handleClick(e, "uae")}>
          {props.country == "uae" ? (
            <SvgLoader src="/static/svgs/country/uae2.svg" />
          ) : (
            <SvgLoader src="/static/svgs/country/uae.svg" />
          )}
        </a>
      </Link>
      <Link href="/country/nigeria">
        <a onClick={e => props.handleClick(e, "nigeria")}>
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

export default Ready;
