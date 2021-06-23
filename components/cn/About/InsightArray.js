import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import { InsightCard } from "../../Global/Insight";

export default class InsightArray extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          {[1, 2, 3, 4].map((insight, key) => {
            return (
              <Row key={key} className="my-5">
                <Col md={4}>
                  <InsightCard />
                </Col>
                <Col md={4}>
                  <InsightCard />
                </Col>
                <Col md={4}>
                  <InsightCard />
                </Col>
              </Row>
            );
          })}
        </Container>
      </Fragment>
    );
  }
}
