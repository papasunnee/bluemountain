import React, { Fragment } from "react";
import Link from "next/link";
import { Container, Col, Row } from "reactstrap";

export default (props) => {
  return (
    <Fragment>
      <Container fluid>
        <div className="aboutTitle">
          <h2 className="my-5">{props.title}</h2>
          <Row className="my-5">
            <Col md={12}>
              <div style={{ width: "90%" }}>
                <p style={{ lineHeight: 2, textAlign: "justify" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt illo amet similique repudiandae, dolorem maxime
                  reiciendis aspernatur nesciunt mollitia corrupti ab, fugiat
                  illum est cumque, non placeat tenetur distinctio doloribus!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt illo amet similique repudiandae, dolorem maxime
                  reiciendis aspernatur nesciunt mollitia corrupti ab, fugiat
                  illum est cumque, non placeat tenetur distinctio doloribus!
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
      </Container>
      <Container>
        <Row className="my-5">
          {ConsultingList.map((cl, key) => {
            return (
              <Col key={key} md={6} className="mb-5">
                <ConsultingItem details={cl} />
              </Col>
            );
          })}
        </Row>
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

const ConsultingItem = ({ details = {} }) => {
  return (
    <Fragment>
      <div className="aboutItem">
        <h4 className="mb-4">{details.name}</h4>
        <img src={`/static/images/consulting/${details.imageSrc}.png`} />
        <p className="mt-4" style={{ lineHeight: 2 }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
          placeat, error unde eius eum minima, aspernatur corrupti totam
          quisquam nostrum earum commodi, dolore labore dolorem voluptates hic
          officia. Id, ex. Lorem ipsum dolor, sit amet consectetur adipisicing
        </p>
        <Link href={`/organizational/${details.link}`}>
          <a className="btn btn-primary py-1" style={{ fontSize: "12px" }}>
            Read More
          </a>
        </Link>
      </div>
      <style jsx>{`
        .aboutItem {
          margin: 20px 0;
        }
        .aboutItem h4 {
          color: #0069d1;
          font-weight: bold;
        }
        .aboutItem .joinNetwork {
          text-decoration: none;
          display: inline-block;
          color: #fff;
          border-radius: 30px;
          background-color: #dd071c;
          font-weight: bold;
          padding: 5px 20px;
          margin: 20px auto;
          font-size: 12px;
          text-align: center;
        }
      `}</style>
    </Fragment>
  );
};

const ConsultingList = [
  { name: "Cultural Transformation", imageSrc: "cultural", link: "cultural" },
  {
    name: "Strategic Workforce Planning",
    imageSrc: "strategic",
    link: "strategic",
  },
  {
    name: "Organizational Effectiveness",
    imageSrc: "effect",
    link: "effectiveness",
  },
  {
    name: "Performance Management",
    imageSrc: "performance",
    link: "performance",
  },
];
