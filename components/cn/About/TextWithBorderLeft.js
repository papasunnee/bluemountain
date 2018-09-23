import React, { Component, Fragment } from "react";

export default class TextWithBorderLeft extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let borderColor = this.props.borderColor || "null";
    return (
      <Fragment>
        <div
          className="aboutText"
          style={{
            borderLeft: `6px solid ${borderColor}`
          }}
        >
          <p>{this.props.children}</p>
        </div>
        <style>{`
            div.aboutText{
                padding-left : 15px ;
            }
        `}</style>
      </Fragment>
    );
  }
}
