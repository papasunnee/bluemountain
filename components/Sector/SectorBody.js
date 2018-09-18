import React, { Component, Fragment } from "react";

import { Container, Col, Row } from "reactstrap";

export default class FullText extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Container>
          <div className="mt-4 mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
            officia beatae officiis. Sint, ad dolores. Hic commodi officia ab?
            At odio quasi cum modi nulla atque, neque repellendus minima ad.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
            officia beatae officiis. Sint, ad dolores. Hic commodi officia ab?
            At odio quasi cum modi nulla atque, neque repellendus minima ad.
          </div>
          <Row>
            <Col xs={12} md={6}>
              <h2 style={{ background: "#00f", padding: "5px", color: "#fff" }}>
                Lorem ipsum dolor sit amet,
              </h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Expedita officia beatae officiis. Sint, ad dolores. Hic commodi
                officia ab? At odio quasi cum modi nulla atque, neque
                repellendus minima ad. Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Expedita officia beatae officiis. Sint, ad
                dolores. Hic commodi officia ab? At odio quasi cum modi nulla
                atque, neque repellendus minima ad.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Expedita officia beatae officiis. Sint, ad dolores. Hic commodi
                officia ab? At odio quasi cum modi nulla atque, neque
                repellendus minima ad. Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Expedita officia beatae officiis. Sint, ad
                dolores. Hic commodi officia ab? At odio quasi cum modi nulla
                atque, neque repellendus minima ad.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Expedita officia beatae officiis. Sint, ad dolores. Hic commodi
                officia ab? At odio quasi cum modi nulla atque, neque
              </p>
            </Col>
            <Col xs={12} md={6}>
              <div className="statContent">
                <h2>TYPICAL EXECUTIVE POSTS</h2>
                <ul>
                  <li>Lorem ipsum dolor sit</li>
                  <li>Lorem ipsum dolor sit</li>
                  <li>Lorem ipsum dolor sit</li>
                  <li>Lorem ipsum dolor sit</li>
                  <li>Lorem ipsum dolor sit</li>
                  <li>Lorem ipsum dolor sit</li>
                  <li>Lorem ipsum dolor sit</li>
                  <li>Lorem ipsum dolor sit</li>
                  <li>Lorem ipsum dolor sit</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
        <style jsx>{`
          .statContent {
            margin: auto;
            background-color: #e7d10d;
            height: 100%;
            width: 80%;
            padding: 20px;
          }
          .statContent ul {
            list-style: none;
          }
          .statContent ul li {
            font-size: 20px;
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
