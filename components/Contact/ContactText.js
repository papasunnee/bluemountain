import React, { Fragment, useState } from "react";
import { Container, Col, Row } from "reactstrap";
import { Flags } from "../Footer/Ready";
import PhoneInput from "react-phone-input-2";
import "./phoneStyle.css";

const initialState = "canada";
export default () => {
  const [state, setState] = useState(initialState);
  const [form, setForm] = useState({ phone: "" });
  const handleClick = (e, flag) => {
    e.preventDefault();
    setState(flag);
  };
  // const handleForm = (e) => {
  //   const { value } = e.target;
  //   setForm({ ...form, phone: value });
  // };
  return (
    <Fragment>
      <Container fluid>
        <div className="aboutTitle">
          <h2>CONTACT</h2>
          <Row>
            <Col md={{ size: 6, offset: 3 }}>
              <Flags handleClick={handleClick} />
            </Col>
          </Row>
          <div>
            <Row className="my-5">
              <Col md={6}>
                <div className="formWrapper">
                  <form action="" className="contactForm" onSubmit="alert()">
                    <div className="form-group mb-4">
                      <label
                        htmlFor=""
                        style={{ color: "#0069d1", fontWeight: "bold" }}
                      >
                        <span style={{ color: "red" }}>*</span> Phone Number
                      </label>
                      <PhoneInput
                        className="form-control mb-2"
                        style={{ width: "100% !important" }}
                        country={"us"}
                        placeholder="Contact Number"
                        value={form.phone}
                        name="phone"
                        onChange={(phone) => setForm({ phone })}
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor=""
                        style={{ color: "#0069d1", fontWeight: "bold" }}
                      >
                        <span style={{ color: "red" }}>*</span> Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email_address"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor=""
                        style={{ color: "#0069d1", fontWeight: "bold" }}
                      >
                        <span style={{ color: "red" }}>*</span> Message
                      </label>
                      <textarea
                        style={{ height: "100px" }}
                        className="form-control"
                        name="address"
                        row="10"
                        required
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">
                      SUBMIT
                    </button>
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
                        <div>{state.toUpperCase()} Number</div>
                        <div>{state.toUpperCase()} Email Address</div>
                        <div>{state.toUpperCase()} Address</div>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12} className="my-4">
                      <img src={`/static/svgs/country/${state}.svg`} />
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
            //background-color: #ffda44;
            background-color: #031928;
            color: #fff;
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
          .react-tel-input .form-control,
          .contactForm .form-control {
            margin-bottom: 20px;
            border-radius: 0px;
            border: none;
            border-bottom: 1px solid #ffda44;
            outline: none;
            box-shadow: none;
            width: 100% !important ;
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
