import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import { InsightCard } from "../Global/Insight";

export default class InsightRow extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Container>
          <Row className="mt-5">
            <Col md={12}>
              <h2 style={{ fontWeight: "bold" }}>GLOBAL INSIGHTS</h2>
              <h4
                className="my-4"
                style={{ color: "#0069D1", fontWeight: "600" }}
              >
                Lorem Ipsum Dolor Sit
              </h4>
            </Col>
          </Row>
          {[1, 2, 3, 4].map((insight, key) => {
            return (
              <Row key={key} className="my-5">
                <Col md={4}>
                  <InsightCard />
                </Col>
                {/* <Col md={4}>
                  <InsightCard />
                </Col>
                <Col md={4}>
                  <InsightCard />
                </Col> */}
              </Row>
            );
          })}
        </Container>
      </Fragment>
    );
  }
}
