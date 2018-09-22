import React from "react";
import { Jumbotron } from "reactstrap";
import Link from "next/link";
import Nav from "./Nav";

const Banner = props => {
  const banner = props.bgImage || "headerbg";
  return (
    <div>
      <Jumbotron
        className="jumboDemo"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundImage: `url(/static/svgs/images/${banner}.svg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderRadius: "0px",
          paddingBottom: "0.5rem",
          paddingTop: "0px",
          minHeight: "30vh",
          padding: "0px"
        }}
      >
        <Nav />
        <div className="ml-5" style={{ marginLeft: "20px" }}>
          <h1
            className="display-5"
            style={{
              color: "#0069D1",
              textTransform: "uppercase",
              fontWeight: "bold"
            }}
          >
            {props.title1}
          </h1>

          <p>
            <Link href="/about" prefetch>
              <a
                style={{
                  color: "#000",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  textDecoration: "none"
                }}
              >
                {props.subtitle}
              </a>
            </Link>
          </p>
        </div>
      </Jumbotron>
    </div>
  );
};

export default Banner;
