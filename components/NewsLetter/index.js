import SvgLoader from "bv-react-svgloader";
import Link from "next/link";
import React from "react";
import FooterTop from "../cn/Row/FooterTop";

export default () => {
  return (
    <FooterTop>
      <div style={{ display: "flex", marginTop: "40px" }}>
        <SvgLoader src="/static/svgs/images/cn/emailBlue.svg" />
        <div
          style={{
            width: "40%",
            marginLeft: "40px",
          }}
        >
          <h2>Blue Mountain Newsletter </h2>
          <p>
            Aliquam ante. Nunc dapibus tortor vel mi dapibus sollicitudin. Nulla
            quis diam. Quis autem vel eum iure reprehenderit qui in ea voluptate
            velit esse quam.
          </p>
          <p>
            <Link href="/newsletter" prefetch>
              <a
                style={{
                  backgroundColor: "#E5CE00",
                  color: "#000",
                  fontSize: "15px",
                  padding: " 5px 10px ",
                  display: "inline-block",
                  borderRadius: "5px",
                  textDecoration: "none",
                }}
              >
                Sign Up To Our Newsletter
              </a>
            </Link>
          </p>
        </div>
      </div>
    </FooterTop>
  );
};
