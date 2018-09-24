import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import TextWithBorderLeft from "../About/TextWithBorderLeft";
import SvgLoader from "bv-react-svgloader";

export default class EventTop extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col md={7}>
              <TextWithBorderLeft borderColor="#E5CE00">
                Lorem ipsum dolor sit amet, sollicitudin mattis id habitasse
                massa proin, dui erat mauris magna, habitant etiam, massa quam
                at egestas a felis eros, non egestas ornare dapibus mollis
                aenean. Nulla praesent, ut nibh neque ullamcorper. Sit
                ultricies, dignissim mauris a non, vel vestibulum dolor. Lorem
                ipsum dolor sit amet, sollicitudin mattis id habitasse massa
                proin, dui erat mauris magna, habitant etiam, massa quam at
                egestas a felis eros, non egestas ornare dapibus mollis aenean.
                Nulla praesent, ut nibh neque ullamcorper. Sit ultricies,
                dignissim mauris a non, vel vestibulum dolor.
              </TextWithBorderLeft>
            </Col>
            <Col md={5}>
              <div
                style={{
                  backgroundColor: "#0069D1",
                  padding: "20px",
                  color: "#fff",
                  textAlign: "center",
                  width: "80%"
                }}
              >
                <SvgLoader src="/static/svgs/images/cn/event.svg" />
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
