import React, { Fragment } from "react";
import { Container, Col, Row } from "reactstrap";
import { Flags } from "../Footer/Ready";

export default () => {
  return (
    <Fragment>
      <Container fluid>
        <div className="aboutTitle">
          <h2>CONTACT</h2>
          <Row>
            <Col md={{ size: 6, offset: 3 }}>
              <Flags />
            </Col>
          </Row>
          <div>
            <Row>
              <Col md={6}>
                <div style={{ width: "90%" }}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt illo amet similique repudiandae, dolorem maxime
                    reiciendis aspernatur nesciunt mollitia corrupti ab, fugiat
                    illum est cumque, non placeat tenetur distinctio doloribus!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt illo amet similique repudiandae, dolorem maxime
                    reiciendis aspernatur nesciunt mollitia corrupti ab, fugiat
                    illum est cumque, non placeat tenetur distinctio doloribus!
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div style={{ width: "90%" }}>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt illo amet similique repudiandae, dolorem maxime
                    reiciendis aspernatur nesciunt mollitia corrupti ab, fugiat
                    illum est cumque, non placeat tenetur distinctio doloribus!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt illo amet similique repudiandae, dolorem maxime
                    reiciendis aspernatur nesciunt mollitia corrupti ab, fugiat
                    illum est cumque, non placeat tenetur distinctio doloribus!
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
      <style jsx>
        {`
          .aboutTitle {
            padding: 0 50px;
            margin: 40px 0px;
          }
          .aboutTitle h2 {
            font-weight: bold;
          }
          @media (max-width: 576px) {
            .aboutTitle {
              padding: 0 10px;
              margin: 40px 0px;
            }
            .aboutTitle h2 {
              font-size: 25px;
            }
          }
        `}
      </style>
    </Fragment>
  );
};
