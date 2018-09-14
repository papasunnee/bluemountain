import React, { Component, Fragment } from "react";
import { Container} from "reactstrap";
import Insight from "./insight";

export default class InsightRow extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Container>
            <Insight title="Globe" />
            <Insight title="USA" />
            <Insight title="UK" />
            <Insight title="SOUTH AFRICA" />
        </Container>
      </Fragment>
    );
  }
}
