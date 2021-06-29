import React, { Component, Fragment } from "react";
import Link from "next/link";
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardFooter,
  CardBody,
} from "reactstrap";

export default class extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <CardDeck>
          {InsightCardArray.map((ica, key) => {
            return <InsightCard option={ica} key={key} />;
          })}
        </CardDeck>
      </Fragment>
    );
  }
}

export const InsightCard = (props) => {
  const { option = {} } = props;
  return (
    <Fragment>
      <Card>
        <CardImg
          top
          width="100%"
          src="/static/images/home/insight.jpg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle className="text-primary">Lorem Ipsum</CardTitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </CardText>
        </CardBody>
        <CardFooter className="text-muted">
          <div className="cardFooter">
            <div>27th April, 2020</div>
            <div>
              <Link href="/insight-detail">
                <a style={{ textDecoration: "none" }}>Read More</a>
              </Link>
            </div>
          </div>
        </CardFooter>
      </Card>
      <style jsx>{`
        .cardFooter {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
        }
      `}</style>
    </Fragment>
  );
};

const InsightCardArray = [
  { title: "", content: "", date: "", link: "/insight-detail" },
  // { title: "", content: "", date: "", link: "/insight-detail" },
  // { title: "", content: "", date: "", link: "/insight-detail" },
];
