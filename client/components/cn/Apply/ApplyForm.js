import React, { Component, Fragment } from "react";
import { Mutation } from "react-apollo";

import { Container, Row, Col } from "reactstrap";
import { Button, Form, FormGroup, FormText } from "reactstrap";

import { REGISTER_CONSULTANT } from "../../../lib/graphql/mutations";
import InputComponent from "../InputComponent";
import Loading from "../../Loading";

const initState = {
  name: "",
  phone: "",
  email: "",
  message: "",
  cv: null,
  isBusy: false,
  successMessage: "",
  errorMessage: ""
};

export default class ApplyForm extends Component {
  state = {
    ...initState
  };

  handleChange = (name, value) => this.setState({
    [name]: value,
    successMessage: "",
    errorMessage: ""
  });

  displayError = errorMessage => this.setState({ errorMessage });

  onError = error => {
    console.log(error);
    if (error.graphQLErrors.length==0)
      this.displayError("There was an issue submitting your request try again later.")

    error.graphQLErrors.forEach(error=>{
      switch(error.message) {
        case `Validation failed`:
        console.log(error);
          if (error.extensions.exception.errors.email) {
            this.displayError("This email is already registered")
          }
        break;
        default:
        this.props.showLoginError("Please Try Again Later")
      }
    })
  }
  render() {
    const { successMessage, errorMessage, isBusy } = this.state;
    return (
      <Fragment>
        <Container style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Row>
            <Col md={7}>
              <Mutation
                mutation={REGISTER_CONSULTANT}
                onCompleted={() =>
                  this.setState({
                    ...initState,
                    successMessage: "Thank you for your message. It has been sent."
                  })
                }
                onError={this.onError}
              >
                {(registerConsultant, { loading }) => (
                  <Form
                    onSubmit={async e => {
                      e.preventDefault();
                      e.stopPropagation();

                      const { cv, name, phone, email, message } = this.state;

                      const uploadPreset = 'zuk2fkkh'; //process.env.REACT_APP_UPLOAD_PRESET;
                      const cloudName = 'hxbgo7vbm'; //process.env.REACT_APP_CLOUD_NAME;

                      const formData = new FormData();
                      formData.append('file', cv);
                      formData.append('upload_preset', uploadPreset);

                      try {
                        this.setState({isBusy: true})
                        const response = await fetch(
                          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,{
                            method: 'POST',
                            body: formData
                          }
                        );

                        const cvFile = await response.json();
                        this.setState({isBusy: false})

                        registerConsultant({ variables: {
                          name,
                          phone,
                          email,
                          // message,
                          ...cvFile
                        }})
                      } catch (e) {
                        this.setState({isBusy: false})
                        console.log(e);
                        this.displayError("Something went wrong while uploading document");
                      }
                    }}
                    >
                <FormGroup>
                  <InputComponent
                    labelFor="fullname"
                    label="Your Name"
                    type="text"
                    name="fullname"
                    required
                    value={this.state.name}
                    onChange={e=>this.handleChange("name", e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <InputComponent
                    labelFor="email"
                    label="Your Email"
                    type="email"
                    name="email"
                    required
                    value={this.state.email}
                    onChange={e=>this.handleChange("email", e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <InputComponent
                    labelFor="fullname"
                    label="Your Phone Nummber"
                    type="phone"
                    name="phone"
                    required
                    value={this.state.phone}
                    onChange={e=>this.handleChange("phone", e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <InputComponent
                    labelFor="cvUpload"
                    label="Upload Your CV"
                    type="file"
                    name="file"
                    files={[this.state.cv]}
                    onChange={e=>this.handleChange("cv", e.target.files[0])}
                    required
                  />
                  <FormText color="muted">File upload information</FormText>
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
                {loading || isBusy ?
                  <Loading />
                  :
                  <Button type="submit">SEND</Button>
                }
              </Form>
            )}
          </Mutation>
            </Col>
          </Row>
          <style jsx>{`
            .error-text {
              color: red;
              transition: all 0.5s ease-in;
            }
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
