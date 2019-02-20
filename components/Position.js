import React, { Component, Fragment } from "react";
import { Col } from "reactstrap";
import SvgLoader from "bv-react-svgloader";

export default class Position extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <Col
          xs={12}
          style={{
            border: "2px solid #000",
            padding: "20px 10px 0px 10px"
          }}
        >
          <div className="flex">
            <SvgLoader src="/static/svgs/images/logo.svg" />
            <div>
              <h5>{this.props.position.title || "No Title"}</h5>
              <p>{this.props.position.company || "No Company"}</p>
            </div>
            <div>
              <h5>{this.props.position.location || "No Location"}</h5>
              <p>Fulltime</p>
            </div>
            <div className="text-center">
              <h5>Today</h5>
              <a>Apply</a>
            </div>
          </div>
        </Col>
        <style jsx>{`
          .flex {
            display: flex;
            justify-content: space-between;
          }
          h5 {
            font-weight: bold;
            font-size: 16px;
          }
          p,
          a {
            font-size: 12px;
          }
          a {
            background-color: #0069d1;
            color: #fff !important ;
            padding: 5px 10px;
            border-radius: 5px;
            text-decoration: none;
          }
        `}</style>
      </Fragment>
    );
  }
}
