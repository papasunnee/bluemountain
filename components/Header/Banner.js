import React from "react";
import { Jumbotron } from "reactstrap";
import Link from "next/link";
import Nav from "./Nav";

const Banner = props => {
  const banner = props.bgImage || "headerbg";
  // boxShadow: "inset 0px 155px 89px 0px rgba(0,0,0,0.93)",
  return (
    <div>
      <Jumbotron
        className="jumboDemo"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundImage: `linear-gradient(180deg, #282828 0%, rgba(40, 40, 40, 0) 100%), url(/static/svgs/images/${banner}.svg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderRadius: "0px",
          paddingBottom: "0.5rem",
          paddingTop: "0px",
          minHeight: "80vh",
          padding: "0px"
        }}
      >
        <Nav />
        <div>
          <h2
            className="display-5"
            style={{
              color: "#fff",
              textAlign: "center",
              textTransform: "uppercase",
              fontWeight: "bold"
            }}
          >
            {props.title1}
          </h2>
        </div>

        <p className="ml-4">
          <Link href="/about" prefetch>
            <a
              style={{
                color: "yellow",
                fontWeight: "bold",
                textTransform: "uppercase",
                textDecoration: "none"
              }}
            >
              {props.subtitle}
            </a>
          </Link>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Banner;
