import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import Service from "./Service";

export default class ServiceRow extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Container style={{ marginTop: "30px" }}>
          <Row>
            <Service title="Banking & Finance" />
            <Service title="Energy, Oil & Gas" />
            <Service title="Telecommunication" />
          </Row>
          <Row>
            <Service title="Technology" />
            <Service title="Government & Non-Profit" />
            <Service title="Education" />
          </Row>
          <Row>
            <Service title="Life Service & Pharmaciticals" />
            <Service title="Health Care" />
            <Service title="Manufacturing" />
          </Row>
        </Container>
      </Fragment>
    );
  }
}
