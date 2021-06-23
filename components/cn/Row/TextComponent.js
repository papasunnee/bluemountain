import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";

export default class extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Container style={{ marginTop: "80px" }}>
          <Row>
            <Col>
              <div className="text-justify">
                <p className="lead" style={{ fontWeight: "bold" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  libero sapiente dolorem rem ipsam enim reprehenderit
                  architecto molestiae ducimus aperiam, aut dolorum eos facilis
                  vero alias tempore, hic assumenda? Porro! Lorem ipsum dolor,
                  sit amet consectetur adipisicing elit. Tenetur blanditiis
                  harum deleniti aut ab labore quam eaque nesciunt fuga expedita
                  officiis odio voluptatibus, illum vero fugiat error debitis
                  saepe qui!
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
