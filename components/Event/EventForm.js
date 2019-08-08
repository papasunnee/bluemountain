import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import { Button, Form, FormGroup, FormText } from "reactstrap";
import InputComponent from "../cn/InputComponent";

export default class EventForm extends Component {
  render() {
    return (
      <Fragment>
        <Container style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Row>
            <Col md={7}>
              <Form>
                <FormGroup>
                  <InputComponent
                    labelFor="fullname"
                    label="Your Name"
                    type="text"
                    name="fullname"
                    id="fullname"
                  />
                </FormGroup>
                <FormGroup>
                  <InputComponent
                    labelFor="email"
                    label="Your Email"
                    type="email"
                    name="email"
                    id="email"
                  />
                </FormGroup>
                <FormGroup>
                  <FormText color="muted">
                    I accept to receive newsletters from Blue Mountain. Read the
                    Blue Mountain Privacy Policy.
                  </FormText>
                </FormGroup>
                <Button>SUBSCRIBE</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
