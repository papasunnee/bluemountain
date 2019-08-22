import React from "react";
import { Row, Col, Jumbotron } from "reactstrap";
import Nav from "./Nav";

const Banner = props => {
  const banner = props.bgImage || "headerbg";
  return (
    <div>
      <Nav />
      <Jumbotron
        style={{
          backgroundImage: `${
            props.jpg
              ? `url(/static/images/cn/${banner}.jpg`
              : `url(/static/svgs/images/${banner}.svg)`
          }`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderRadius: "0px",
          minHeight: "40vh"
        }}
      >
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
                    fontWeight: "bold",
                    textAlign: "left"
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
