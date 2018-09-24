import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import TextWithBorderLeft from "../About/TextWithBorderLeft";

export default class ApplyTop extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col md={7}>
              <div
                style={{
                  backgroundColor: "#E5CE00",
                  padding: "20px"
                }}
              >
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                congue felis in faucibus.Cras sit amet nibh libero, in gravida
                nulla. Nulla vel metus scelerisque ante sollicitudin commodo.
                Cras purus odio, vestibulum in vulputate at, tempus viverra
                turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                Donec lacinia congue felis in faucibus.
              </div>
            </Col>
            <Col md={5}>
              <div
                style={{
                  backgroundColor: "#0069D1",
                  padding: "20px",
                  color: "#fff",
                  width: "90%"
                }}
              >
                <h4 className="mb-3 text-center">Talk To Us</h4>
                <TextWithBorderLeft>
                  <Link href="/consulting-network/discuss-project" prefetch>
                    <a>Discuss your project with us</a>
                  </Link>
                </TextWithBorderLeft>
                <TextWithBorderLeft borderColor="#E5CE00">
                  Apply to join our network
                </TextWithBorderLeft>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
