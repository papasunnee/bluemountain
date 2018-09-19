import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import Service from "./Service";

export default class ServiceRow extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Container style={{ marginTop: "100px" }}>
          <Row>
            <Col xs={12}>
              <h2
                style={{
                  color: "#0069D1",
                  textAlign: "center",
                  fontWeight: "bolder",
                  marginBottom: "30px"
                }}
              >
                SECTORS
              </h2>
            </Col>
          </Row>
          <Row>
            <Service
              title="Banking & Finance"
              url="banking_finance"
              imageUrl="bf"
            />
            <Service
              title="Energy, Oil & Gas"
              url="energy_oil_gas"
              imageUrl="energy"
            />
            <Service
              title="Telecommunication"
              url="telecommunication"
              imageUrl="telecommunication"
            />
          </Row>
          <Row>
            <Service
              title="Technology"
              url="technology"
              imageUrl="technology"
            />
            <Service
              title="Government & Non-Profit"
              url="government"
              imageUrl="government"
            />
            <Service title="Education" url="education" imageUrl="education" />
          </Row>
          <Row>
            <Service
              title="Life Service & Pharmaciticals"
              url="life_service"
              imageUrl="life"
            />
            <Service title="Health Care" url="health_care" imageUrl="health" />
            <Service
              title="Manufacturing"
              url="manufacturing"
              imageUrl="manufacturing"
            />
          </Row>
        </Container>
      </Fragment>
    );
  }
}
