import React, { Component, Fragment } from "react";
import Link from "next/link";
import {
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
        <CardDeck>
          {ManagementTeam.map((mT, key) => {
            return <ManagementCard details={mT} key={key} />;
          })}
        </CardDeck>
      </Fragment>
    );
  }
}

export const ManagementCard = (props) => {
  const { details = {} } = props;
  return (
    <Fragment>
      <Card>
        <CardImg
          top
          width="100%"
          src="/static/images/management/manager.jpg"
          alt="Card image cap"
        />
        <CardBody style={{ backgroundColor: "#031928" }}>
          <CardTitle className="text-primary font-weight-bold">
            <span style={{ color: "#fff !important" }}>{details.name}</span>
          </CardTitle>
        </CardBody>
      </Card>
    </Fragment>
  );
};

const ManagementTeam = [
  { name: "Jefferson Sanders" },
  { name: "Jefferson Sanders" },
  { name: "Jefferson Sanders" },
];
