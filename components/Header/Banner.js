import React from "react";
import { Jumbotron } from "reactstrap";
import Nav from "./Nav";

const Banner = props => {
  const banner = props.bgImage || 'headerbg' ;
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
          paddingTop: "10rem",
          paddingBottom: "0.5rem",
          paddingTop: "0px",
          minHeight: "60vh",
          padding: "0px"
        }}
      >
        <Nav />
        <div style={{ marginLeft: "20px" }}>
          <h1
            className="display-5 mt-5"
            style={{
              color: "#fff",
              textTransform: "uppercase",
              fontWeight: "bold"
            }}
          >
            {props.title1}
            <br /> {props.title2}
          </h1>
          <p
            style={{
              color: "yellow",
              fontWeight: "bold",
              textTransform: "uppercase"
            }}
          >
            {props.subtitle}
          </p>
        </div>
      </Jumbotron>
    </div>
  );
};

export default Banner;
