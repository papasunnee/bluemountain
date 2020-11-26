import React, { Fragment, Component } from "react";
import "./Topnews.scss";

class Topnews extends Component {
  render() {
    return (
      <Fragment>
        <div className="topnews">
          <div className="text">
            <h6>LATEST NEWS:</h6>
            <p>
              ulla pulvinar eleifend sem. Aliquam erat volutpat. Aenean
              placerat. Integer imperdiet lectus quis justo. Nulla turpis magna,
              cursus sit amet, suscipit a, interdum id, felis. Fusce ...........
              cursus sit amet suscipit a, interdum id, felis.
            </p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Topnews;
