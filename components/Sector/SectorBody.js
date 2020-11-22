import React, { Component, Fragment } from "react";
import TextComponent from "../TinyComponent/TextComponent.js";
import ImageWithShareComponent from "../TinyComponent/ImageWithShareComponent.js";

import { Container, Col, Row } from "reactstrap";

export default class SectorBody extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Container>
          <div className="mt-5 mb-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
            officia beatae officiis. Sint, ad dolores. Hic commodi officia ab?
            At odio quasi cum modi nulla atque, neque repellendus minima ad.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
            officia beatae officiis. Sint, ad dolores. Hic commodi officia ab?
            At odio quasi cum modi nulla atque, neque repellendus minima ad.
          </div>
          <Row>
            <Col xs={12} md={6}>
              <TextComponent color="#0069D1" />
            </Col>
            <Col xs={12} md={6}>
              <div className="statContent">
                <h2>
                  TYPICAL
                  <br /> EXECUTIVE POSTS
                </h2>
                <ul>
                  <li>Lorem ipsum dolor sit amet,</li>
                  <li>Lorem ipsum dolor sit amet,</li>
                  <li>Lorem ipsum dolor sit amet,</li>
                  <li>Lorem ipsum dolor sit amet,</li>
                  <li>Lorem ipsum dolor sit amet,</li>
                  <li>Lorem ipsum dolor sit amet,</li>
                </ul>
              </div>
            </Col>
          </Row>
          <br />
          <br />
          <Row className="mb-4">
            <Col xs={12} md={6}>
              <ImageWithShareComponent />
              {/* <h4 className="text-center">SHARE LINK COMPONENT HERE</h4> */}
            </Col>
            <Col xs={12} md={6}>
              <TextComponent textColor="#000" />
            </Col>
          </Row>
        </Container>
        <style jsx>{`
          .statContent {
            background-color: #e7d10d;
            height: 100%;
            width: 100%;
            padding: 40px 20px;
          }
          .statContent ul {
            list-style: none;
          }
          .statContent ul li {
            font-size: 25px !important;
            margin-bottom: 10px;
          }
          .statContent ul li::before {
            content: " ";
            background-image: url("/static/svgs/images/icon.svg");
            width: 15px;
            height: 15px;
            margin-right: 20px;
            background-size: cover;
            background-repeat: no-repeat;
            display: inline-block;
            background-position: center;
          }
          .statContent h2 {
            color: #0052b4;
            width: 80%;
            font-weight: bolder;
            margin-left: 40px;
          }
        `}</style>
      </Fragment>
    );
  }
}
