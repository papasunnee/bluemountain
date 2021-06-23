import React, { Component, Fragment } from "react";
import { Container } from "reactstrap";

export default class FooterTop extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <section className="imageBg">
          <Container>{this.props.children}</Container>
        </section>
        <style jsx>{`
          .imageBg {
            position: relative;
            min-height: 400px;
            padding: 50px;
            color: #fff;
          }
          .imageBg::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            background: #0052b4 url("/static/svgs/images/cn/cnfootertop.svg");
            background-repeat: no-repeat;
            background-position: right bottom;
            height: 100%;
            width: 100%;
            z-index: -1;
          }
        `}</style>
      </Fragment>
    );
  }
}
