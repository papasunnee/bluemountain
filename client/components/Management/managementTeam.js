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
      <Card className="mb-3">
        <CardImg
          top
          width="100%"
          src="/static/images/management/manager.jpg"
          alt="Card image cap"
        />
        <CardBody
          style={{
            backgroundColor: "#02375a",
            padding: "0.5rem 1rem",
          }}
        >
          <span
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
              color: "#fff !important",
            }}
          >
            {details.name}
          </span>
          <span
            style={{
              fontWeight: "lighter",
              fontSize: "12px",
              color: "#fff !important",
            }}
          >
            {details.title}
          </span>
        </CardBody>
      </Card>
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
