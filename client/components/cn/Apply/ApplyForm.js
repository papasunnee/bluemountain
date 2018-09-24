import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import InputComponent from "../InputComponent";

export default class ApplyForm extends Component {
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
                  <InputComponent
                    labelFor="fullname"
                    label="Your Phone Nummber"
                    type="phone"
                    name="phone"
                    id="phone"
                  />
                </FormGroup>
                <FormGroup>
                  <InputComponent
                    labelFor="cvUpload"
                    label="Upload Your CV"
                    type="file"
                    name="file"
                    id="file"
                  />
                  <FormText color="muted">File upload information</FormText>
                </FormGroup>
                <FormGroup>
                  <FormText color="muted">
                    Your data will be securely stored in line with our Privacy
                    Policy.
                  </FormText>
                </FormGroup>
                <Button>SEND</Button>
              </Form>
            </Col>
          </Row>
          <style jsx>{`
            .leftBorder {
              border-left: 1px solid red !important;
              background-color: red;
            }
          `}</style>
        </Container>
      </Fragment>
    );
  }
}
