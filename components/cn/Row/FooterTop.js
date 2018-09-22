import React, { Component, Fragment } from "react";
import { Container } from "reactstrap";
import Link from "next/link";

export default class FooterTop extends Component {
  render() {
    return (
      <Fragment>
        <section className="imageBg">
          <Container>
            <div
              style={{
                width: "60%",
                color: "#fff",
                top: "80px ",
                left: "80px",
                marginTop: "40px"
              }}
            >
              <h2>LOREM IPSUM</h2>
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
                    Meet our consultants
                  </a>
                </Link>
              </p>
            </div>
          </Container>
        </section>
        <style jsx>{`
          .imageBg {
            position: relative;
            min-height: 400px;
            padding: 50px;
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
