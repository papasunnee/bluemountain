import React, { Component, Fragment } from "react";
import TextComponent from "../TinyComponent/TextComponent";
import TextComponentNoHeader from "../TinyComponent/TextComponentNoHeader";
import BadgeComponent from "../TinyComponent/BadgeComponent";
import SvgLoader from "bv-react-svgloader";

import { Container, Col, Row } from "reactstrap";

export default class ServiceBody extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <Fragment>
        <Container>
          <div className="mt-5 mb-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
            officia beatae officiis. Sint, ad dolores. Hic commodi officia ab?
            At odio quasi cum modi nulla atque, neque repellendus minima ad.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
            officia beatae officiis. Sint, ad dolores. Hic commodi officia ab?
            At odio quasi cum modi nulla atque, neque repellendus minima ad.
          </div>
          <Row>
            <Col xs={12} md={6}>
              <TextComponent color="#E5CE00" />
            </Col>
            <Col xs={12} md={6}>
              <BadgeComponent />
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={6}>
              <SvgLoader
                src={`/static/svgs/images/service/${this.props.serviceImage ||
                  null}.svg`}
              />
            </Col>
            <Col xs={12} md={6}>
              <TextComponentNoHeader />
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
