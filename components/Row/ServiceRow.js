import React, { Component, Fragment } from "react";
import Link from "next/link";
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
        <Link href={option.href}>
          <a>
            <div className="leader-title">
              <p>{option.title}</p>
            </div>
          </a>
        </Link>
      </div>
      <style jsx>{`
        .leaderWrapper {
          positon: relative;
          background-color: #e5e5e5;
        }
        .leaderWrapper:hover img {
          filter: grayscale(70%);
        }
        .leaderWrapper img {
          width: 100%;
          transition: all 1s;
          filter: grayscale(0%);
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
  { title: "Executive Search", image: "1", href: "/executive-search" },
  { title: "Executive Assessment", image: "2", href: "/executive-assessment" },
  { title: "Executive Coaching", image: "3", href: "/executive-coaching" },
  { title: "Strategic Consulting", image: "4", href: "/strategic-consulting" }
];
