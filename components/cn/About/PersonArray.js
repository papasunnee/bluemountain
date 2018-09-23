import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import Person from "./Person";

export default class PersonArray extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          {[1, 2, 3, 4, 5, 6].map(person => {
            return (
              <Row>
                <Col md={6}>
                  <Person />
                </Col>
                <Col md={6}>
                  <Person />
                </Col>
              </Row>
            );
          })}
        </Container>
      </Fragment>
    );
  }
}
