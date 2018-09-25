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

import { COUNTRIES, SERVICES, COMPANY_SIZES } from '../../../constants'
import { REGISTER_ORGANIZATION } from "../../lib/graphql/mutations";
import Loading from "../Loading";

const placeholders = {
  service: 'Select Service',
  country: 'Select Country',
  companySize: 'Size of Company'
}

const initState = {
  name: "",
  email: "",
  message: "",
  service: placeholders.service,
  country: placeholders.country,
  companySize: placeholders.companySize,
  successMessage: "",
  errorMessage: ""
};

const inputStyle = { height: "60px", fontSize: "1.2em" }

export default class Example extends React.Component {
  state = {
    ...initState
  };

  handleChange = (name, value) => {
    this.setState({
      [name]: value,
      successMessage: "",
      errorMessage: ""
    });
  };

  isPlaceholder = (name) => placeholders[name] === this.state[name]
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

              const { service, country, companySize } = this.state;

              console.log(this.state);
              if (!this.isPlaceholder('service')) {
                if (!this.isPlaceholder('country')) {
                  if (!this.isPlaceholder('companySize')) {
                    registerOrganization({ variables: {
                      ...this.state,
                      service: SERVICES.find(({label})=>service === label).value,
                      country: COUNTRIES.find(({label})=>country === label).value,
                      companySize: COMPANY_SIZES.find(({label})=>companySize === label).value
                    } });
                  } else {
                    this.setState({
                      errorMessage: "Select Your company size"
                    });
                  }
                } else {
                  this.setState({
                    errorMessage: "Select a country"
                  });
                }
              } else {
                this.setState({
                  errorMessage: "Select a Service"
                });
              }
            }}
            >
            <Row>
              <Col xs={12} md={12}>
                <FormGroup>
                  <Input
                    style={inputStyle}
                    placeholder="Name"
                    required
                    onChange={e=>this.handleChange("name", e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col xs={12} md={6}>
                <FormGroup>
                  <Input
                    style={inputStyle}
                    type="email"
                    placeholder="Email"
                    required
                    onChange={e=>this.handleChange("email", e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col xs={12} md={6}>
                <FormGroup>
                  <Input
                    style={inputStyle}
                    type="select"
                    required
                    onChange={e=>this.handleChange("service", e.target.value)}
                  >
                    <option>{placeholders.service}</option>
                    {SERVICES.map(({label, value}) => <option key={value}>
                      {label}
                    </option>)}
                  </Input>
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col xs={12} md={6}>
                <FormGroup>
                  <Input
                    style={inputStyle}
                    type="select"
                    required
                    onChange={e=>this.handleChange("country", e.target.value)}
                  >
                    <option>{placeholders.country}</option>
                    {COUNTRIES.map(({label, value}) => <option key={value}>
                      {label}
                    </option>)}
                  </Input>
                </FormGroup>
              </Col>
              <Col xs={12} md={6}>
                <FormGroup>
                  <Input
                    style={inputStyle}
                    type="select"
                    required
                    onChange={e=>this.handleChange("companySize", e.target.value)}
                  >
                    <option>{placeholders.companySize}</option>
                    {COMPANY_SIZES.map(({label, value}) => <option key={value}>
                      {label}
                    </option>)}
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
                    placeholder="Your Message Here"
                    required
                    onChange={e=>this.handleChange("message", e.target.value)}
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
            {loading ?
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
