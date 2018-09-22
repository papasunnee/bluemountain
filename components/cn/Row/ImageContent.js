import React, { Component, Fragment } from "react";
import Link from "next/link";

export default class ImageContent extends Component {
  render() {
    return (
      <Fragment>
        <div className="imageBg">
          <div
            style={{
              width: "25%",
              float: "right",
              color: "#fff",
              textAlign: "center",
              margin: "100px 150px"
            }}
          >
            <h3>
              Aliquam ante. Nunc dapibus tortor vel mi dapibus sollicitudin.
            </h3>
            <p style={{ fontSize: "15px", margin: "40px 0px" }}>
              Aliquam ante. Nunc dapibus tortor vel mi dapibus sollicitudin.
              Nulla quis diam. Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse quam.
            </p>
            <p>
              <Link href="" prefetch>
                <a
                  style={{
                    backgroundColor: "#E5CE00",
                    color: "#000",
                    fontWeight: "bold",
                    fontSize: "12px",
                    padding: " 5px 10px ",
                    display: "inline-block",
                    borderRadius: "5px",
                    textDecoration: "none"
                  }}
                >
                  Apply to Join our network
                </a>
              </Link>
            </p>
          </div>
        </div>
        <style jsx>{`
          .imageBg {
            position: relative;
            min-height: 500px;
          }
          .imageBg::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            background: url("/static/svgs/images/cn/cnhome.svg");
            background-size: cover;
            height: 100%;
            width: 100%;
            z-index: -1;
          }
        `}</style>
      </Fragment>
    );
  }
}
