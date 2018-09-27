import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import { Mutation } from "react-apollo";

import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

import { CREATE_ENQUIRY } from "../../../lib/graphql/mutations";
import Loading from "../../Loading";

const initState = {
  name: "",
  email: "",
  phone: "",
  orgName: "",
  timeToCall: "",
  successMessage: "",
  errorMessage: ""
};

export default class DiscussForm extends Component {
  state = {
    ...initState
  };

  handleChange = (name, value) => this.setState({
    [name]: value,
    successMessage: "",
    errorMessage: ""
  });

  displayError = errorMessage => this.setState({ errorMessage });

  onError = error => console.log(error)

  render() {
    const { successMessage, errorMessage } = this.state;
    return (
      <Fragment>
        <Container style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Row>
            <Col md={7}>
              <Mutation
                mutation={CREATE_ENQUIRY}
                onCompleted={() =>
                  this.setState({
                    ...initState,
                    successMessage: "Thank you for your message. It has been sent."
                  })
                }
                onError={this.onError}
              >
                {(createEnquiry, { loading }) => (
                  <Form
                    onSubmit={async e=>{
                      e.preventDefault();
                      e.stopPropagation();

                      const { name, phone, email, orgName, timeToCall } = this.state;

                      createEnquiry({ variables: {
                        name,
                        phone,
                        email,
                        orgName,
                        timeToCall,
                      }})
                    }}
                    >
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
                    required
                    onChange={e=>this.handleChange("name", e.target.value)}
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
                    required
                    onChange={e=>this.handleChange("email", e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="phone">Your Phone Number</Label>
                  <Input
                    style={{
                      borderLeft: "4px solid #4285F4 ",
                      borderRadius: "0px",
                      backgroundColor: "#F0F0F0"
                    }}
                    type="phone"
                    name="phone"
                    id="phone"
                    required
                    onChange={e=>this.handleChange("phone", e.target.value)}
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
                    required
                    onChange={e=>this.handleChange("orgName", e.target.value)}
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
                    required
                    onChange={e=>this.handleChange("timeToCall", e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <FormText color="muted">
                    Your data will be securely stored in line with our Privacy
                    Policy.
                  </FormText>
                </FormGroup>
                {errorMessage && (
                  <p className="error-text">{errorMessage}</p>
                )}
                {errorMessage ? null : successMessage ? (
                  <p>{successMessage}</p>
                ) : (
                  <br />
                )}
                { loading ? <Loading /> : <Button type="submit">SEND</Button> }
              </Form>
            )}
          </Mutation>
            </Col>
          </Row>
          <style jsx>{`
            .leftBorder {
              border-left: 1px solid red !important;
              background-color: red;
            }
            .error-text {
              color: red;
              transition: all 0.5s ease-in;
            }
          `}</style>
        </Container>
      </Fragment>
    );
  }
}
