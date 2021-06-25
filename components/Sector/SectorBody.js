import React, { Component, Fragment } from "react";
import Link from "next/link";
import { Container, Col, Row } from "reactstrap";
import SectorForm, { Sectors } from "./SectorForm";

export default class SectorBody extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <Fragment>
        <Container className="my-5">
          <Row className="my-5">
            <Col md={8} className="my-5">
              <div className="mb-5">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Expedita officia beatae officiis. Sint, ad dolores. Hic
                  commodi officia ab? At odio quasi cum modi nulla atque, neque
                  repellendus minima ad. Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Expedita officia beatae officiis. Sint, ad
                  dolores. Hic commodi officia ab? At odio quasi cum modi nulla
                  atque, neque repellendus minima ad.
                </p>
              </div>
              <div className="mb-5">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Expedita officia beatae officiis. Sint, ad dolores. Hic
                  commodi officia ab? At odio quasi cum modi nulla atque, neque
                  repellendus minima ad. Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Expedita officia beatae officiis. Sint, ad
                  dolores. Hic commodi officia ab? At odio quasi cum modi nulla
                  atque, neque repellendus minima ad.
                </p>
              </div>

              <div className="mb-5">
                <SectorForm />
              </div>
            </Col>
            <Col md={4} className="my-5">
              {Sectors.map((service, index) => {
                return <ServiceBox service={service} key={index} />;
              })}
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

const ServiceBox = (props) => {
  const { service } = props;
  return (
    <Fragment>
      <div className="serviceBox">
        <h4 className="mb-4">{service.name}</h4>
        <p className="mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
          placeat, error unde eius eum minima, aspernatur corrupti totam
        </p>
        <Link href={service.href}>
          <a className="btn btn-primary py-1" style={{ fontSize: "12px" }}>
            Read More
          </a>
        </Link>
      </div>
      <style jsx>{`
        .serviceBox {
          margin-bottom: 30px;
          padding-left: 10px;
        }
        .serviceBox p {
          font-size: 12px;
        }
        .serviceBox h4 {
          color: #0069d1;
          font-weight: bold;
        }
      `}</style>
    </Fragment>
  );
};
