import React, { Component, Fragment } from "react";
import SvgLoader from "bv-react-svgloader";
import './title.scss' ;

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
      </Fragment>
    );
  }
}
