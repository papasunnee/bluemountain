import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import Insight from "./Insight";

export default class InsightArray extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          {[1, 2, 3, 4].map(insight => {
            return (
              <Row>
                <Col md={4}>
                  <Insight key={insight} />
                </Col>
                <Col md={4}>
                  <Insight key={insight} />
                </Col>
                <Col md={4}>
                  <Insight key={insight} />
                </Col>
              </Row>
            );
          })}
        </Container>
      </Fragment>
    );
  }
}
