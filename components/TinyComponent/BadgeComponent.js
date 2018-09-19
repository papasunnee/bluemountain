import React, { Component, Fragment } from "react";
import "./BadgeComponent.scss";

export default class BadgeComonent extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <div className="statContent">
          <ul>
            <li>Lorem ipsum dolor sit amet,</li>
            <li>Lorem ipsum dolor sit amet,</li>
            <li>Lorem ipsum dolor sit amet,</li>
          </ul>
        </div>
      </Fragment>
    );
  }
}
