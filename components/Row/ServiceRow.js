import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";

export default class ServiceRow extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Container fluid style={{ marginTop: "30px" }}>
          <Row>
            <Col xs="12" md="12">
              <h3
                className="text-center mb-4"
                style={{ fontWeight: "bold", color: "#0069D1" }}
              >
                LEADERSHIP SOLUTIONS
              </h3>
            </Col>
            {LSA.map((lsac, key) => (
              <Col xs="12" md="3" key={key}>
                <LeadershipSolution option={lsac} />
              </Col>
            ))}
          </Row>
        </Container>
      </Fragment>
    );
  }
}

const LeadershipSolution = props => {
  const { option = {} } = props;
  return (
    <Fragment>
      <div className="leaderWrapper">
        <img
          src={`/static/images/home/${option.image}.jpg`}
          className="img-fluid"
        />
        <div className=" leader-title">
          <p>{option.title}</p>
        </div>
      </div>
      <style jsx>{`
        .leaderWrapper {
          positon: relative;
          background-color: #e5e5e5;
        }
        img {
          width: 100%;
        }
        .leaderWrapper:hover .leader-title {
          background-image: linear-gradient(
            180deg,
            rgba(66, 133, 244, 0) 0%,
            #0069d1 100%
          );
          color: #fff;
        }
        .leader-title {
          position: absolute;
          font-size: 12px;
          color: #000;
          font-weight: bold;
          text-transform: uppercase;
          bottom: 1px;
          width: 92%;
          padding-left: 20px;
          padding-top: 20px;
        }
      `}</style>
    </Fragment>
  );
};

const LSA = [
  { title: "Executive Search", image: "1" },
  { title: "Executive Assessment", image: "2" },
  { title: "Executive Coaching", image: "3" },
  { title: "Strategic Consulting", image: "4" }
];
