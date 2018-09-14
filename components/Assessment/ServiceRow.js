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
            <Service md="6" />
            <Service md="6" />
          </Row>
          <Row>
            <Service md="6" />
            <Service md="6" />
          </Row>
        </Container>
      </Fragment>
    );
  }
}
