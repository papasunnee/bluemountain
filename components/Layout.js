import React, { Component, Fragment } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Nav from "../components/Header/Nav";
import Footer from "../components/Footer/Footer";

export default class extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Container
          fluid
          style={{
            paddingLeft: "0px",
            paddingRight: "0px"
          }}
        >
          {/* <Nav/> */}
          {this.props.children}
          <Footer />
        </Container>
      </Fragment>
    );
  }
}
