import React, { Component } from "react";
import Link from "next/link";
import { Container, Col, Row } from "reactstrap";
import "./ready.scss";
export default class Ready extends Component {
  render() {
    return (
      <Container>
        <Row className="mt-3 mb-3">
          <Col md={12}>
            <div className="text-justify bg-primary text-center p-4 readyText">
              Ready to discuss your project ?{" "}
              <Link href="/registration" prefetch>
                <a className="pl-3 pr-3 pt-1 pb-1">CLICK HERE</a>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
