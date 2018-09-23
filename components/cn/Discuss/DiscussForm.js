import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

export default class DiscussForm extends Component {
  render() {
    return (
      <Fragment>
        <Container style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Row>
            <Col md={7}>
              <Form>
                <FormGroup>
                  <Label for="fullname">Your Name</Label>
                  <Input
                    style={{
                      borderLeft: "4px solid #4285F4 ",
                      borderRadius: "0px",
                      backgroundColor: "#F0F0F0"
                    }}
                    type="fullname"
                    name="fullname"
                    id="fullname"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="email">Your Email</Label>
                  <Input
                    style={{
                      borderLeft: "4px solid #4285F4 ",
                      borderRadius: "0px",
                      backgroundColor: "#F0F0F0"
                    }}
                    type="email"
                    name="email"
                    id="email"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="phone">Your Phone Nummber</Label>
                  <Input
                    style={{
                      borderLeft: "4px solid #4285F4 ",
                      borderRadius: "0px",
                      backgroundColor: "#F0F0F0"
                    }}
                    type="phone"
                    name="phone"
                    id="phone"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="organization">Your Organization</Label>
                  <Input
                    style={{
                      borderLeft: "4px solid #4285F4 ",
                      borderRadius: "0px",
                      backgroundColor: "#F0F0F0"
                    }}
                    type="organization"
                    name="organization"
                    id="organization"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="callTime">When is a good time to call</Label>
                  <Input
                    style={{
                      borderLeft: "4px solid #4285F4 ",
                      borderRadius: "0px",
                      backgroundColor: "#F0F0F0"
                    }}
                    type="callTime"
                    name="callTime"
                    id="callTime"
                  />
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
