import React from "react";
import { Mutation } from "react-apollo";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Input,
} from "reactstrap";

import { REGISTER_ORGANIZATION } from "../../lib/graphql/mutations";
import Loading from "../Loading";

const initState = {
  name: "",
  email: "",
  // lastName: "",
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
        mutation={REGISTER_ORGANIZATION}
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
        {(registerOrganization, { loading }) => (
          <Form
            onSubmit={async e => {
              e.preventDefault();
              e.stopPropagation();

              console.log(this.state);
              // registerOrganization({ variables: this.state });
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
              <Col xs={12} md={12}>
                <FormGroup>
                  <Input
                    style={{ height: "60px", fontSize: "1.2em" }}
                    type="fname"
                    name="fname"
                    placeholder="Name"
                  />
                </FormGroup>
              </Col>
              {/* <Col xs={12} md={6}>
                <FormGroup>
                  <Input
                    style={{ height: "60px", fontSize: "1.2em" }}
                    type="lname"
                    name="lname"
                    placeholder="Last Name"
                  />
                </FormGroup>
              </Col> */}
            </Row>

            <Row>
              <Col xs={12} md={6}>
                <FormGroup>
                  <Input
                    style={{ height: "60px", fontSize: "1.2em" }}
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                </FormGroup>
              </Col>
              <Col xs={12} md={6}>
                <FormGroup>
                  <Input
                    style={{ height: "60px", fontSize: "1.2em" }}
                    type="select"
                    name="select"
                  >
                    <option>Select Service</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col xs={12} md={6}>
                <FormGroup>
                  <Input
                    style={{ height: "60px", fontSize: "1.2em" }}
                    type="select"
                    name="select"
                  >
                    <option>Select Country</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col xs={12} md={6}>
                <FormGroup>
                  <Input
                    style={{ height: "60px", fontSize: "1.2em" }}
                    type="select"
                    name="select"
                  >
                    <option>Size of Company</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
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
                  />
                </FormGroup>
              </Col>
            </Row>

            <Button>SEND MESSAGE</Button>
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
