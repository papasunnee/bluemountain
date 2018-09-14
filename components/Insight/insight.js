import React, { Component, Fragment } from "react";
import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/fontawesome-free-solid";

export default class Insight extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <Fragment>
        <Row style={{ marginBottom: "30px" }}>
          <Col md={4}>
            <div
              style={{
                backgroundColor: "#4285F4",
                padding: "10px 15px",
                color: "#fff"
              }}
            >
              <FontAwesomeIcon icon={faGlobe} color="#fff" />{" "}
              {this.props.title || "No Title"}
            </div>
            <div
              style={{
                width: "100%",
                height: "250px",
                backgroundColor: "#b2b2b2"
              }}
            />
          </Col>
          <Col md={8}>
            <h3
              style={{
                color: "#0000ff",
                fontWeight: "bold",
                textDecoration: "underline"
              }}
            >
              Lorem ipsum dolor
            </h3>
            <p style={{ color: "#DD071C" }}>5th August, 2018 </p>
            <p>
              Aliquam ante. Nunc dapibus tortor vel mi dapibus sollicitudin.
              Nulla quis diam. Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse quam nihil molestiae consequatur, vel illum
              qui dolorem eum fugiat quo voluptas nulla pariatur? Aliquam id
              dolor. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra,
            </p>
            <a
              style={{
                backgroundColor: "#E5CE00",
                padding: "5px 15px",
                color: "#fff"
              }}
            >
              Learn More
            </a>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
