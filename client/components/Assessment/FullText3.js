import React, { Component, Fragment } from "react";
import { Container, Col, Row } from "reactstrap";
import RegForm2 from "./RegForm2";

export default class FullText extends Component {
  state = {};
  actionCallback = (panels, state) => {
    // fires any time headers are clicked and panels change state
    // receives array of panels: [{ panel: 3, open: true }, { panel: 6, open: true }]
    // and the AccordionWithHeader state
    console.log("panels, state", panels, state);
  };
  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col>
              <h2 className="my-5" style={{ fontWeight: "bold" }}>
                REGISTRATION
              </h2>
              <h5
                className="my-5"
                style={{ fontWeight: "bold", color: "#0069D1" }}
              >
                For Executive Candidates
              </h5>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
              officia beatae officiis. Sint, ad dolores. Hic commodi officia ab?
              At odio quasi cum modi nulla atque, neque repellendus minima ad.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
              officia beatae officiis. Sint, ad dolores. Hic commodi officia ab?
              At odio quasi cum modi nulla atque, neque repellendus minima ad.
            </Col>
            <Col md={6}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
              officia beatae officiis. Sint, ad dolores. Hic commodi officia ab?
              At odio quasi cum modi nulla atque, neque repellendus minima ad.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
              officia beatae officiis. Sint, ad dolores. Hic commodi officia ab?
              At odio quasi cum modi nulla atque, neque repellendus minima ad.
            </Col>
          </Row>
          <Row>
            <Col md="12" style={{ margin: "30px auto" }}>
              <RegForm2 />
            </Col>
          </Row>
        </Container>
        <style jsx>{`
          .statContent {
            margin: auto;
            background-color: #0069d1;
            height: 100%;
            padding: 20px;
            padding-left: 80px;
            color: #fff;
          }
          .statContent h2 {
            margin-top: 40px;
            font-weight: bolder;
          }
        `}</style>
      </Fragment>
    );
  }
}
