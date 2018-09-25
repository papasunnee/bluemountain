import React from "react";
import { Mutation } from "react-apollo";
import { Col, Row, Button, Form, FormGroup, Input, FormText } from "reactstrap";

import { REGISTER_CANDIDATE } from "../../lib/graphql/mutations";
import Loading from "../Loading";

const initState = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
  successMessage: "",
  errorMessage: ""
};

export default class Example extends React.Component {
  state = {
    ...initState
  };

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  };
  render() {
    const { successMessage, errorMessage } = this.state;
    return (
      <Mutation
        mutation={REGISTER_CANDIDATE}
        onCompleted={() =>
          this.setState({
            ...initState,
            successMessage: "Thank you for your message. It has been sent."
          })
        }
        onError={error => {
          console.log(error);
          this.setState({
            errorMessage:
              "There was an issue submitting your request try again later."
          });
        }}
      >
        {(registerCandidate, { loading }) => (
          <Form
            onSubmit={async e => {
              e.preventDefault();
              e.stopPropagation();

              console.log(this.state);
              const { file } = this.props;
              const { isBusy } = this.state;
              // console.log(this.props.file);

              if (file){
                const uploadPreset = 'zuk2fkkh'; //process.env.REACT_APP_UPLOAD_PRESET;
                const cloudName = 'hxbgo7vbm'; //process.env.REACT_APP_CLOUD_NAME;

                const formData = new FormData();
                formData.append('file', file);
                formData.append('upload_preset', uploadPreset);

                try {
                  this.setState({isBusy: true})
                  const response = await fetch.post(
                    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
                    formData,
                  );

                  console.log(response.data);

                  // runMutation({ variables: {
                  //   ...this.state,
                  //   ...response.data
                  // }})
                } catch (e) {
                  this.setState({isBusy: false})
                  console.log(e);
                  toast("Something went wrong while uploading document", {...TOAST_STYLE.fail});
                }
              }

              // registerCandidate({ variables: this.state });
              // if (serviceChosen) {
              //   this.setState({
              //     errorMessage: ""
              //   });
              // } else {
              //   this.setState({
              //     errorMessage: "Select at least one service"
              //   });
              // }
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

            <Button type="submit">SEND MESSAGE</Button>
            <style jsx>
              {`
                .input {
                  height: 100px !important;
                }
              `}
            </style>
          </Form>
        )}
      </Mutation>
    );
  }
}
