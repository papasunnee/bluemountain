import React, { Component, Fragment } from "react";
import {
  AccordionWithHeader,
  AccordionNode,
  AccordionHeader,
  AccordionPanel
} from "react-accordion-with-header";
import { Container, Col, Row } from "reactstrap";

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
              <AccordionWithHeader
                firstOpen
                actionCallback={this.actionCallback}
              >
                {[1, 2, 3, 4].map((item, i) => {
                  return (
                    <AccordionNode key={i} style={{ marginBottom: "10px" }}>
                      <AccordionHeader
                        style={{
                          backgroundColor: "#E5CE00",
                          fontSize: "15px",
                          fontWeight: "bold",
                          borderBottom: "1px solid #8e8e8e",
                          padding: "10px"
                        }}
                        horizontalAlignment="left"
                        verticalAlignment="center"
                      >
                        <div>This is the header</div>
                        {/* <div>It has flexbox layout</div> */}
                      </AccordionHeader>
                      <AccordionPanel>
                        <div style={{ padding: "20px" }}>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Suscipit voluptatibus soluta sit, alias numquam
                          enim culpa necessitatibus, molestias quis pariatur
                          iure voluptatum. Doloribus suscipit dolores quas quam
                          a iste similique!
                        </div>
                      </AccordionPanel>
                    </AccordionNode>
                  );
                })}
              </AccordionWithHeader>
            </Col>
            <Col xs={12} md={6}>
              <div className="statContent">
                <h2>Lorem ipsum dolor sit</h2>
                <h2>Lorem ipsum dolor sit</h2>
                <h2>Lorem ipsum dolor sit</h2>
              </div>
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
