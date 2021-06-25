import React, { Component, Fragment } from "react";
import { Col, Row, Card, CardImg, CardBody } from "reactstrap";

export default class extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Row>
          {ManagementTeam.map((mT, key) => {
            return (
              <Col md={4} key={key}>
                <ManagementCard details={mT} />
              </Col>
            );
          })}
        </Row>
      </Fragment>
    );
  }
}

export const ManagementCard = (props) => {
  const { details = {} } = props;
  return (
    <Fragment>
      <div
        style={{
          border: "1px solid #b2b2b2",
          textAlign: "center",
          padding: "20px",
          boxSizing: "border-box",
          marginBottom: "20px",
        }}
      >
        <img
          src="/static/images/management/manager.jpg"
          style={{
            borderRadius: "50%",
            maxWidth: "200px",
            display: "block",
            margin: "auto",
          }}
          className="img-fluid"
        />
        <div
          style={{
            marginBottom: "5px",
            fontWeight: "bold",
          }}
        >
          {details.name}
        </div>
        <div
          style={{
            fontWeight: "lighter",
            fontSize: "12px",
          }}
        >
          {details.title}
        </div>
      </div>
    </Fragment>
  );
};

const ManagementTeam = [
  { name: "Jefferson Sanders", title: "President & CEO" },
  { name: "Jefferson Sanders", title: "Chief Operating Officer" },
  { name: "Jefferson Sanders", title: "Chief Financial Officer" },
  { name: "Jefferson Sanders", title: "Untitled Officer" },
  { name: "Jefferson Sanders", title: "Untitled Officer" },
  { name: "Jefferson Sanders", title: "Untitled Officer" },
];
