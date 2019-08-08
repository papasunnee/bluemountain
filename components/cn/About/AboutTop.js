import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import TextWithBorderLeft from "./TextWithBorderLeft";

export default class AboutTop extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col md={8}>
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
              <TextWithBorderLeft borderColor="#0069D1">
                Lorem ipsum dolor sit amet, sollicitudin mattis id habitasse
                massa proin, dui erat mauris magna, habitant etiam, massa quam.
                Lorem ipsum dolor sit amet, sollicitudin mattis id habitasse
                massa proin, dui erat mauris magna, habitant etiam, massa quam.
              </TextWithBorderLeft>
            </Col>
            <Col md={4}>
              <div
                style={{
                  backgroundColor: "#0069D1",
                  padding: "20px",
                  color: "#fff",
                  width: "70%"
                }}
              >
                <h4 className="mb-3 text-center">About Us</h4>
                <TextWithBorderLeft borderColor="#E5CE00">
                  Our Team
                </TextWithBorderLeft>
                <TextWithBorderLeft>Lorem ipsum</TextWithBorderLeft>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
