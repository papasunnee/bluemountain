import React, { Component } from "react";
import Banner from "../components/Header/Banner";
import Layout from "../components/Layout";
import SectorRow from "../components/Row/SectorRow";
import { Col, Container, Row } from "reactstrap";
import ManagementRow from "../components/Management/managementRow";
import Global from "../components/Global/Global";

export default class extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Banner bgImage="about" min />
        <Container>
          <Row className="mb-5">
            <Col md={12} className="mt-5">
              <h2>Sectors</h2>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col md={12}>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
                quasi dolor sit ea aut fugit iusto optio vel modi! Ipsa vel qui
                consectetur iusto ullam beatae sunt corrupti mollitia placeat?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
                quasi dolor sit ea aut fugit iusto optio vel modi! Ipsa vel qui
                consectetur iusto ullam beatae sunt corrupti mollitia placeat?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
                quasi dolor sit ea aut fugit iusto optio vel modi! Ipsa vel qui
                consectetur iusto ullam beatae sunt corrupti mollitia placeat?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
                quasi dolor sit ea aut fugit iusto optio vel modi! Ipsa vel qui
                consectetur iusto ullam beatae sunt corrupti mollitia placeat?
              </p>
            </Col>
          </Row>
        </Container>
        <SectorRow title="" />
        <Global title="GLOBAL INSIGHT" />
      </Layout>
    );
  }
}
