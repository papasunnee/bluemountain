import React, { Fragment, useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import "./university.scss";

export default () => {
  const [state, setState] = useState(1);
  const input = 0;
  useEffect(() => {
    changeImage();
  }, [input]);
  const changeImage = () => {
    setInterval(() => {
      setState((prev) => {
        let increment = ++prev;
        if (increment == 4) return 1;
        else return increment;
      });
    }, 10000);
  };
  return (
    <Fragment>
      <img
        src="/static/images/university/main.png"
        style={{ width: "100%" }}
        alt=""
      />
      <Row noGutters>
        <Col sm={{ size: 0 }} md={4}>
          <div className="university__student" />
        </Col>
        <Col md={8}>
          <div className="university__main">
            <img className="img-fluid" src="/static/images/footer/bmu.png" />
            <h2>STARTING SOON</h2>
          </div>
        </Col>
      </Row>
      <style jsx>{`
        .university__student {
          min-height: 100vh;
          background: url("/static/images/university/${state}.png") no-repeat
            0px 0px;
        }
      `}</style>
    </Fragment>
  );
};
