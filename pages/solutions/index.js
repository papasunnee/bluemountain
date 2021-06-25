import React, { Component } from "react";
import Banner from "../../components/Header/Banner";
import Layout from "../../components/Layout";
import ServiceRow from "../../components/Row/ServiceRow";
import { Col, Container, Row } from "reactstrap";
import Global from "../../components/Global/Global";

export default class extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Banner bgImage="about" min />
        <Container>
          <Row className="mb-5">
            <Col md={12} className="mt-5">
              <h2>Leadership Solutions</h2>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col md={12}>
              <p>
                Every organization that wants to grow, develop and be better
                than others in their field face executive challenges, they
                either need a new set of executive or training for the existing
                members, we provide long lasting solutions to executive problems
                in line with global trend in the aspect of transparency,
                honesty, dedication, independence, having good reputation and
                growth culture.
              </p>
            </Col>
          </Row>
        </Container>
        <ServiceRow title="" />
        <Global title="GLOBAL INSIGHT" />
      </Layout>
    );
  }
}
