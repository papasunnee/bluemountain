import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import SvgLoader from "bv-react-svgloader";

export default class ServiceRow extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Container style={{ marginTop: "50px" }}>
          <Row>
            <Col md={12}>
              <h2 style={{ marginBottom: "20px " }}>Example Projects</h2>
            </Col>
          </Row>
          <Row>
            <Col xs="12" md="4">
              <div className="exampleProject">
                <p>
                  Aliquam ante. Nunc dapibus tortor vel mi dapibus sollicitudin.
                  Nulla quis diam. Quis autem vel eum iure reprehenderit qui in
                  ea voluptate velit esse quam.
                </p>
              </div>
            </Col>
            <Col xs="12" md="4">
              <div className="exampleProject">
                <p>
                  Aliquam ante. Nunc dapibus tortor vel mi dapibus sollicitudin.
                  Nulla quis diam. Quis autem vel eum iure reprehenderit qui in
                  ea voluptate velit esse quam.
                </p>
              </div>
            </Col>
            <Col xs="12" md="4">
              <div className="exampleProject">
                <p>
                  Aliquam ante. Nunc dapibus tortor vel mi dapibus sollicitudin.
                  Nulla quis diam. Quis autem vel eum iure reprehenderit qui in
                  ea voluptate velit esse quam.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <style jsx>{`
          .exampleProject {
            height: 300px;
            border-top: 4px solid #e5ce00;
            padding: 30px 10px;
          }
        `}</style>
      </Fragment>
    );
  }
}
