import React, { Fragment } from "react";
import { Container, Col, Row } from "reactstrap";
import { Flags } from "../Footer/Ready";

export default () => {
  return (
    <Fragment>
      <Container fluid>
        <div className="aboutTitle">
          <h2>CONTACT</h2>
          <Row>
            <Col md={{ size: 6, offset: 3 }}>
              <Flags />
            </Col>
          </Row>
          <div>
            <Row className="my-5">
              <Col md={6}>
                <div className="formWrapper">
                  <form action="" className="contactForm">
                    <input
                      type="text"
                      className="form-control"
                      name="contact_number"
                      placeholder="Contact Number"
                    />
                    <input
                      type="email"
                      className="form-control"
                      name="email_address"
                      placeholder="Email Address"
                    />
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      placeholder="Address"
                    />
                  </form>
                </div>
              </Col>
              <Col md={6}>
                <div className="contactDetails">
                  <Row>
                    <Col md={4}>
                      <img
                        className="img-fluid"
                        src="/static/images/contact/contact.jpg"
                      />
                    </Col>
                    <Col md={8}>
                      <div className="contactList">
                        <div>Contact Number</div>
                        <div>Email Address</div>
                        <div>Address</div>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <img />
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
      <style jsx>
        {`
          .contactList {
            display: flex;
            flex-direction: column;
          }
          .contactList div {
            margin-bottom: 30px;
          }

          .contactDetails {
            background-color: #ffda44;
            padding: 50px;
          }
          .contactDetails div {
            font-weight: bold;
          }
          .formWrapper {
            max-width: 80%;
            margin: auto;
            border-top: 40px solid #0069d1;
            padding-top: 20px;
          }
          .contactForm .form-control {
            margin-bottom: 20px;
            border-radius: 0px;
            border: none;
            border-bottom: 1px solid #ffda44;
            outline: none;
            box-shadow: none;
          }
          .contactForm .form-control::placeholder {
            color: #0069d1;
            font-weight: bold;
          }
          .contactForm .form-control:focus::placeholder {
            color: #0069d1;
            font-weight: normal;
          }
          .aboutTitle {
            padding: 0 50px;
            margin: 40px 0px;
          }
          .aboutTitle h2 {
            font-weight: bold;
          }
          @media (max-width: 576px) {
            .aboutTitle {
              padding: 0 10px;
              margin: 40px 0px;
            }
            .aboutTitle h2 {
              font-size: 25px;
            }
          }
        `}
      </style>
    </Fragment>
  );
};
