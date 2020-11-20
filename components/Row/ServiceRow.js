import React, { Component, Fragment } from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";

export default class ServiceRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { title = "LEADERSHIP SOLUTIONS" } = this.props;
    return (
      <Fragment>
        <Container style={{ marginTop: "30px" }}>
          <Row>
            <Col xs="12" md="12">
              <h3
                className="text-center mb-5"
                style={{ fontWeight: "bold", color: "#0069D1" }}
              >
                {title}
              </h3>
            </Col>
            {LSA.map((lsac, key) => (
              <Col className="mb-5" xs="12" md="4" key={key}>
                <LeadershipSolution option={lsac} />
              </Col>
            ))}
          </Row>
        </Container>
      </Fragment>
    );
  }
}

const LeadershipSolution = (props) => {
  const { option = {} } = props;
  return (
    <Fragment>
      <div className="leaderWrapper">
        <img
          src={`/static/images/home/${option.image}.png`}
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
  { title: "Executive Search", image: "search", href: "/executive-search" },
  {
    title: "Executive Assessment",
    image: "assessment",
    href: "/executive-assessment",
  },
  { title: "Board Services", image: "services", href: "/executive-assessment" },
  {
    title: "Leadership Development",
    image: "development",
    href: "/executive-assessment",
  },
  {
    title: "Global Talent Exchange",
    image: "exchange",
    href: "/executive-assessment",
  },
  {
    title: "Executive Coaching",
    image: "coaching",
    href: "/executive-coaching",
  },
  // { title: "Strategic Consulting", image: "4", href: "/strategic-consulting" },
];
