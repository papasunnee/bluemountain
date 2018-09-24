import React from "react";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

export default class Example extends React.Component {
  render() {
    return (
      <Form>
        <Row>
          <Col xs={12} md={6}>
            <FormGroup>
              <Input
                style={{ height: "60px", fontSize: "1.2em" }}
                type="fname"
                name="fname"
                id="exampleFirstname"
                placeholder="Firstname"
              />
            </FormGroup>
          </Col>
          <Col xs={12} md={6}>
            <FormGroup>
              <Input
                style={{ height: "60px", fontSize: "1.2em" }}
                type="lname"
                name="lname"
                id="exampleLastname"
                placeholder="Last Name"
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
                id="exampleEmail"
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
                id="exampleSelect"
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
                id="exampleSelect"
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
                id="exampleSelect"
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
                id="exampleText"
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
    );
  }
}
