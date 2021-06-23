import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";
import "../Footer/ready.scss";
import "../Global/global.scss";
import ManagementTeam from "./managementTeam";

export default class ManagementRow extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="pt-5 pb-5" style={{ backgroundColor: "#E5E5E5" }}>
        <Container>
          <Row>
            <Col
              xs={12}
              className="text-primary text-center"
              style={{ fontweight: "bolder" }}
            >
              <h3 className="globalTitle">{this.props.title}</h3>
            </Col>
          </Row>
          <Row className="mt-3 mb-3">
            <Col xs={12}>
              <ManagementTeam />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
