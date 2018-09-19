import React, { Component, Fragment } from "react";
import Link from "next/link";
import { Col } from "reactstrap";

export default class Service extends Component {
  constructor(props) {
    super(props);
    let imageName =
      `/static/svgs/images/sectorBox/${this.props.imageUrl}.svg` ||
      "/static/svgs/images/sectorBox/bf.svg";
  }
  render() {
    return (
      <Fragment>
        <Col xs={this.props.xs || "12"} md={this.props.md || "4"}>
          <div className="parent">
            <div className="child">
              <Link
                href={this.props.url ? `/sector/${this.props.url}` : ""}
                prefetch
              >
                <a className="title">{this.props.title || "No Title"}</a>
              </Link>
              <br />
              <br />
              <p>
                Aliquam ante. Nunc dapibus tortor vel mi dapibus sollicitudin.
                Nulla quis diam. Quis autem vel eum
              </p>
            </div>
          </div>
        </Col>

        <style jsx>{`
          .parent {
            position: relative ;
            background-color: #b2b2b2;
            height: 280px;
            overflow : hidden;
            margin-bottom: 30px;
          }
          .parent::before {
            content: "";
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-image: url(
              "/static/svgs/images/sectorBox/${this.props.imageUrl ||
                "bf"}.svg");
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
                display: block;
                transition: all linear 250ms;
            
          }
          .child {
            color: #fff;
            position: absolute ;
            margin-top : -100px ;
            background-color: rgba(125,125,125,0.5);
            font-size: 12px;
            height : 100px ;
            transition: all 1000ms;
          }
          .child:hover {
            background-color: rgba(125,125,125,0.9);
          }
          .child .title {
            font-size: 15px;
            position : absolute ;
            top : 10px ;
            display : block ;
            color: #ffda44;
            font-weight: bold;
          }
          .child p {
            padding : 10px ;
          }
        `}</style>
      </Fragment>
    );
  }
}
