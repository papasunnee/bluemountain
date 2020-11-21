import React, { Component, Fragment } from "react";
import Link from "next/link";
import { Container, Col, Row } from "reactstrap";
import ServiceForm, { Services } from "./ServiceForm";

export default class ServiceBodyUpgrade extends Component {
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
                <ServiceForm />
              </div>
            </Col>
            <Col md={4} className="my-5">
              {Services.map((service, index) => {
                return <ServiceBox service={service} />;
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
  console.log(service);
  return (
    <Fragment>
      <div className="serviceBox">
        <Link href={service.href}>
          <a style={{ textDecoration: "none" }}>
            <div className="mb-4">
              <h5>{service.name}</h5>
              <img
                src={`/static/images/home/${service.imageSrc}`}
                className="img img-fluid"
                alt=""
              />
            </div>
          </a>
        </Link>
      </div>
      <style jsx>{`
        .serviceBox {
          margin-bottom: 30px;
          border-left: 1px solid #e2e2e2;
          border-bottom: 1px solid #e2e2e2;
          padding-left: 10px;
        }
        .serviceBox:hover img {
          filter: grayscale(70%);
        }
      `}</style>
    </Fragment>
  );
};
