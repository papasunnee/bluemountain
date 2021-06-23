import React, { Component, Fragment } from "react";
import { Mutation } from "react-apollo";
import { Container, Row, Col } from "reactstrap";
import { Button, Form, FormGroup, FormText } from "reactstrap";
import InputComponent from "../InputComponent";
import Loading from "../../Loading";

import { NEWSLETTER_SUBSCRIPTION_MUTATION } from "../../../lib/graphql/mutations";

const initState = {
  name: "",
  email: "",
  successMessage: "",
  errorMessage: "",
};

export default class NewsletterForm extends Component {
  state = {
    ...initState,
  };

  handleChange = (name, value) =>
    this.setState({
      [name]: value,
      successMessage: "",
      errorMessage: "",
    });

  displayError = (errorMessage) => this.setState({ errorMessage });

  render() {
    const { successMessage, errorMessage } = this.state;
    return (
      <Fragment>
        <Container style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Row>
            <Col md={7}>
              <Mutation
                mutation={NEWSLETTER_SUBSCRIPTION_MUTATION}
                onCompleted={({ subscribeToNewsletter: { address } }) =>
                  this.setState({
                    ...initState,
                    successMessage: `${address} has subscribed sucessfully`,
                  })
                }
                onError={(error) => {
                  console.log(error);
                }}
              >
                {(subscribeToNewsletter, { loading }) => (
                  <Form
                    onSubmit={(e) => {
                      e.preventDefault();
                      e.stopPropagation();

                      subscribeToNewsletter({
                        variables: {
                          address: this.state.email,
                          name: this.state.name,
                        },
                      });
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
                        onChange={(e) =>
                          this.handleChange("name", e.target.value)
                        }
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
                        onChange={(e) =>
                          this.handleChange("email", e.target.value)
                        }
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormText color="muted">
                        <label htmlFor="">
                          <input type="checkbox" name="" id="" /> I accept to
                          receive newsletters from Blue Mountain. Read the Blue
                          Mountain Privacy Policy.
                        </label>
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
                    {loading ? (
                      <Loading />
                    ) : (
                      <Button type="submit">SUBSCRIBE</Button>
                    )}
                  </Form>
                )}
              </Mutation>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
