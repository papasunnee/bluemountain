import React, { Component, Fragment } from "react";
import { Container, Row } from "reactstrap";
import Position from "./Position";

const positions = [
  {
    title: "Senior Back-end Developer",
    company: "Altitude Technology Worldwide",
    location: "Abuja, Nigeria",
    condition: "Fulltime"
  },
  {
    title: "Senior Front-end Developer",
    company: "Altitude Technology Worldwide",
    location: "Abuja, Nigeria",
    condition: "Fulltime"
  }
];
export default class ExecutivePosition extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            {positions.map((p, i) => {
              return <Position key={i} position={p} />;
            })}
          </Row>
        </Container>
      </Fragment>
    );
  }
}
