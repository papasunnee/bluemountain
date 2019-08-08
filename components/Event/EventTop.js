import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";

export default class EventTop extends Component {
  render() {
    return (
      <Fragment>
        <div style={{ backgroundColor: "#E5E5E5" }}>
          <Container>
            <Row>
              <Col md={12}>
                <h4
                  className="my-4 text-center"
                  style={{ color: "#0069D1", fontWeight: "bold" }}
                >
                  UPCOMING EVENTS
                </h4>
              </Col>
              <Col md={6}>
                {EventArray.map((ea, key) => {
                  return <Event option={ea} key={key} />;
                })}
              </Col>
              <Col md={6}>
                <div className="text-center p-2" style={{ width: "80%" }}>
                  <img
                    className="img-fluid"
                    src="/static/images/home/event.jpg"
                  />
                  {/* <SvgLoader src="/static/svgs/images/cn/event.svg" /> */}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

const Event = props => {
  const { option = {} } = props;
  return (
    <Fragment>
      <div className="events">
        <div className="details">
          <div className="date">{option.date}</div>
          <h4 className="title">{option.title}</h4>
          <div className="location">{option.location}</div>
        </div>
        <div className="links">
          <p>
            Indicate Interest <span>></span>
          </p>
          <p>
            View Details <span>></span>
          </p>
        </div>
      </div>
      <style jsx>
        {`
          .events {
            margin-bottom: 10px;
            transition: all 250ms linear;
          }
          .events:hover {
            margin-left: 20px;
          }

          .events .details {
            padding: 10px 20px;
            background-color: #fff;
          }
          .events .details .date {
            color: #333;
            font-weight: bold;
          }
          .events .details .title {
            color: #0069d1;
            font-weight: bold;
          }
          .events .details .location {
            font-size: 12px;
            color: #333333;
          }
          .events .links {
            border: 1px solid #d4d4d4;
            border-top: none;
            padding-left: 20px;
            padding-top: 10px;
            font-size: 12px;
            display: flex;
            align-items: center;
          }
          .events .links p {
            margin-right: 10px;
          }
          .events .links p span {
            color: red;
            font-weight: bold;
          }
          .events:hover .links {
            background-color: #f8e600;
          }
          .events:hover .links p {
            font-weight: bold;
          }
        `}
      </style>
    </Fragment>
  );
};

const EventArray = [
  {
    title: "A Happy Business Event 2019",
    date: "27th April, 2019",
    location: "Abuja International Trade & Convention Center Abuja",
    link: ""
  },
  {
    title: "Independence Day Sierra Leone",
    date: "27th April, 2019",
    location: "Abuja International Trade & Convention Center Abuja",
    link: ""
  },
  {
    title: "A Happy Business Event 2019",
    date: "27th April, 2019",
    location: "Abuja International Trade & Convention Center Abuja",
    link: ""
  }
];
