import React, { Component, Fragment } from "react";
import SvgLoader from "bv-react-svgloader";

export default class Title extends Component {
  constructor(props) {
    super(props);
  }
  // state = {};
  render() {
    return (
      <Fragment>
        <div className="mt-4 mb-4">
          <div className="hr-sect">
            {this.props.country && (
              <SvgLoader
                src={`/static/svgs/country/${this.props.country}.svg`}
              />
            )}{" "}
            {this.props.title || "No Title"}{" "}
          </div>
        </div>
        <style jsx>
          {`
            .hr-sect {
              display: flex;
              flex-basis: 100%;
              align-items: center;
              color: #0069d1;
              font-size: 2.5em;
              font-weight: bolder;
              letter-spacing: 10px;
            }
            .hr-sect::before,
            .hr-sect::after {
              content: "";
              flex-grow: 1;
              background: rgba(0, 0, 0, 0.35);
              height: 15px;
              font-size: 0px;
              line-height: 0px;
              margin: 0px;
            }
            .hr-sect::before {
              margin-right: 20px;
            }
            .hr-sect::after {
              margin-left: 20px;
            }
          `}
        </style>
      </Fragment>
    );
  }
}
