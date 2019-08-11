import React from "react";
import { Container, Row, Col, Jumbotron } from "reactstrap";
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
          backgroundImage: `${
            props.jpg
              ? `url(/static/images/cn/${banner}.jpg`
              : `url(/static/svgs/images/${banner}.svg)`
          }`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderRadius: "0px",
          paddingBottom: "0.5rem",
          paddingTop: "0px",
          minHeight: "40vh",
          padding: "0px"
        }}
      >
        <Nav />
        <div>
          <Row>
            <Col md={6}>
              <div
                style={{
                  backgroundColor: "rgba(229, 206, 0, 0.95)",
                  padding: "10px 20px",
                  marginBottom: "20px"
                }}
              >
                <h3
                  className="display-5"
                  style={{
                    color: "#0052B4",
                    textTransform: "uppercase",
                    fontWeight: "bold"
                  }}
                >
                  {props.title1}
                </h3>
                <p
                  style={{
                    color: "#000",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    textDecoration: "none"
                  }}
                >
                  {props.subtitle}
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Jumbotron>
    </div>
  );
};

export default Banner;
