import React from "react";
import { Mutation } from "react-apollo";
import { Col, Row, Button, Form, FormGroup, Input, FormText } from "reactstrap";

import { REGISTER_CANDIDATE  } from "../../lib/graphql/mutations";
import Loading from "../Loading";

const initState = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
  cv: null,
  isBusy: false,
  successMessage: "",
  errorMessage: ""
};

export default class Example extends React.Component {
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
      <Mutation
        mutation={REGISTER_CANDIDATE}
        onCompleted={() =>
          this.setState({
            ...initState,
            successMessage: "Thank you for your message. It has been sent."
          })
        }
        onError={this.onError}
      >
        {(registerCandidate, { loading }) => (
          <Form
            onSubmit={async e => {
              e.preventDefault();
              e.stopPropagation();

              // console.log(this.state);
              const { cv, firstName, lastName, email, message } = this.state;
              // const { isBusy } = this.state;

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

                registerCandidate({ variables: {
                  firstName,
                  lastName,
                  email,
                  message,
                  ...cvFile
                }})
              } catch (e) {
                this.setState({isBusy: false})
                console.log(e);
                this.displayError("Something went wrong while uploading document");
              }
            }}
            >
            <Row>
              <Col xs={12} md={6}>
                <FormGroup>
                  <Input
                    style={{ height: "60px", fontSize: "1.2em" }}
                    type="fname"
                    name="fname"
                    placeholder="Firstname"
                    value={this.state.firstName}
                    onChange={e=>this.handleChange("firstName", e.target.value)}
                    required
                  />
                </FormGroup>
              </Col>
              <Col xs={12} md={6}>
                <FormGroup>
                  <Input
                    style={{ height: "60px", fontSize: "1.2em" }}
                    type="lname"
                    name="lname"
                    placeholder="Last Name"
                    value={this.state.lastName}
                    onChange={e=>this.handleChange("lastName", e.target.value)}
                    required
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col xs={12} md={6}>
                <FormGroup>
                  <Input
                    style={{ height: "60px", fontSize: "1.2em" }}
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={e=>this.handleChange("email", e.target.value)}
                    required
                  />
                </FormGroup>
              </Col>
              <Col xs={12} md={6}>
                <FormGroup>
                  <FormText color="muted">(Upload Your Resume Here)</FormText>
                  <Input
                    style={{ height: "60px", fontSize: "1.2em" }}
                    type="file"
                    name="file"
                    files={[this.state.cv]}
                    onChange={e=>this.handleChange("cv", e.target.files[0])}
                    required
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md={12}>
                <FormGroup>
                  <Input
                    style={{
                      height: "160px",
                      fontSize: "1.2em",
                      resize: "none"
                    }}
                    type="textarea"
                    name="text"
                    placeholder="Your Message Here"
                    value={this.state.message}
                    onChange={e=>this.handleChange("message", e.target.value)}
                    required
                  />
                </FormGroup>
              </Col>
            </Row>

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
              <Button type="submit">SEND MESSAGE</Button>
            }
            <style jsx>
              {`
                .input {
                  height: 100px !important;
                }
                .error-text {
                  color: red;
                  transition: all 0.5s ease-in;
                }
              `}
            </style>
          </Form>
        )}
      </Mutation>
    );
  }
}
