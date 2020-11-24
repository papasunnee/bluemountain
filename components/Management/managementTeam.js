import React, { Component, Fragment } from "react";
import Link from "next/link";
import {
  Col,
  Row,
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardBody,
} from "reactstrap";

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
            color: "#fff !important",
          }}
        >
          <p
            className="text-primary font-weight-bold"
            style={{ color: "#fff !important" }}
          >
            <span style={{ color: "#fff !important" }}>{details.name}</span>
          </p>
        </CardBody>
      </Card>
    </Fragment>
  );
};

const ManagementTeam = [
  { name: "Jefferson Sanders" },
  { name: "Jefferson Sanders" },
  { name: "Jefferson Sanders" },
  { name: "Jefferson Sanders" },
  { name: "Jefferson Sanders" },
  { name: "Jefferson Sanders" },
];
