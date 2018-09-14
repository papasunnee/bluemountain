import React, { Component, Fragment } from "react";
import { Col } from "reactstrap";

export default class Service extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <Fragment>
        <Col xs={this.props.xs || "12"} md={this.props.md || "4"}>
          <div className="parent" />
          <div className="child">
            <h6 className="title">{this.props.title || "No Title"}</h6>
            <p>
              Aliquam ante. Nunc dapibus tortor vel mi dapibus sollicitudin.
              Nulla quis diam. Quis autem vel eum
            </p>
          </div>
        </Col>

        <style jsx>{`
          .parent {
            background-color: #b2b2b2;
            height: 170px;
          }
          .child {
            color: #fff;
            height: 130px;
            bottom: 0px;
            padding: 10px;
            background-color: #7d7d7d;
            margin-bottom: 30px;
            font-size: 12px;
          }
          .child .title {
            color: #ffda44;
            font-weight: bold;
          }
        `}</style>
      </Fragment>
    );
  }
}
