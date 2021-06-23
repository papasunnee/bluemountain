import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import { InsightCard } from "../Global/Insight";

export default class InsightDetail extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Container>
          <Row className="mt-5">
            <Col md={12}>
              <h2 style={{ fontWeight: "bold" }}>Lorem Ipsum Dolor Sit</h2>
            </Col>
          </Row>

          <Row className="my-5">
            <Col md={8}>
              <img
                className="img img-fluid"
                src="/static/images/home/insight.jpg"
                alt=""
              />
              <div className="my-5">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  cumque doloremque ullam dicta debitis impedit enim in dolor at
                  inventore iusto dolores est voluptas, provident a sapiente,
                  quis nobis temporibus? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Saepe cumque doloremque ullam dicta debitis
                  impedit enim in dolor at inventore iusto dolores est voluptas,
                  provident a sapiente, quis nobis temporibus?
                </p>
              </div>
              <div className="my-5">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  cumque doloremque ullam dicta debitis impedit enim in dolor at
                  inventore iusto dolores est voluptas, provident a sapiente,
                  quis nobis temporibus? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Saepe cumque doloremque ullam dicta debitis
                  impedit enim in dolor at inventore iusto dolores est voluptas,
                  provident a sapiente, quis nobis temporibus?
                </p>
              </div>
              <div className="my-5">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  cumque doloremque ullam dicta debitis impedit enim in dolor at
                  inventore iusto dolores est voluptas, provident a sapiente,
                  quis nobis temporibus? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Saepe cumque doloremque ullam dicta debitis
                  impedit enim in dolor at inventore iusto dolores est voluptas,
                  provident a sapiente, quis nobis temporibus?
                </p>
              </div>
              <div className="my-5">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  cumque doloremque ullam dicta debitis impedit enim in dolor at
                  inventore iusto dolores est voluptas, provident a sapiente,
                  quis nobis temporibus? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Saepe cumque doloremque ullam dicta debitis
                  impedit enim in dolor at inventore iusto dolores est voluptas,
                  provident a sapiente, quis nobis temporibus?
                </p>
              </div>
            </Col>
            <Col md={4}>
              {[1, 2].map((insight, key) => {
                return (
                  <div className="my-5">
                    <InsightCard />
                  </div>
                );
              })}
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
