import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import Service from "../About/Service";

export default class ServiceRow extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Container style={{ marginTop: "30px" }}>
          <Row>
            <Col md="4">
              <h4 className="serviceTitle">SERVICES AVAILABLE</h4>
            </Col>
          </Row>
          <Row>
            <Service
              imageUrl="service/executivesearchsm"
              title="Executive Search"
              md="6"
            />
            <Service
              imageUrl="service/executiveassessmentsm"
              title="Executive Assessment"
              md="6"
            />
          </Row>
          <Row>
            <Service
              imageUrl="service/executivecoachingsm"
              title="Executive Coaching"
              md="6"
            />

            <Service
              imageUrl="service/strategicconsultingsm"
              title="Strategic Consulting"
              md="6"
            />
          </Row>
        </Container>
        <style jsx>{`
          .serviceTitle {
            background-color: #e5ce00;
            padding: 10px 20px;
            width: auto;
            font-weight: bold;
          }
        `}</style>
      </Fragment>
    );
  }
}
