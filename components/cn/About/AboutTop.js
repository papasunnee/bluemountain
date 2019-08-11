import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import AboutText from "../../About/AboutText";

export default class AboutTop extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid>
          {/* <Row className=" px-5 my-5">
            <Col md={6}>
              <p>
                Lorem ipsum dolor sit amet, sollicitudin mattis id habitasse
                massa proin, dui erat mauris magna, habitant etiam, massa quam
                at egestas a felis eros, non egestas ornare dapibus mollis
                aenean. Nulla praesent, ut nibh neque ullamcorper. Sit
                ultricies, dignissim mauris a non, vel vestibulum dolor. Lorem
                ipsum dolor sit amet, sollicitudin mattis id habitasse massa
                proin, dui erat mauris magna, habitant etiam, massa quam at
                egestas a felis eros, non egestas ornare dapibus mollis aenean.
                Nulla praesent, ut nibh neque ullamcorper. Sit ultricies,
                dignissim mauris a non, vel vestibulum dolor. Lorem ipsum dolor
                sit amet, sollicitudin mattis id habitasse massa proin, dui erat
                mauris magna, habitant etiam, massa quam.
              </p>
            </Col>
            <Col md={6}>
              <p>
                Lorem ipsum dolor sit amet, sollicitudin mattis id habitasse
                massa proin, dui erat mauris magna, habitant etiam, massa quam
                at egestas a felis eros, non egestas ornare dapibus mollis
                aenean. Nulla praesent, ut nibh neque ullamcorper. Sit
                ultricies, dignissim mauris a non, vel vestibulum dolor. Lorem
                ipsum dolor sit amet, sollicitudin mattis id habitasse massa
                proin, dui erat mauris magna, habitant etiam, massa quam at
                egestas a felis eros, non egestas ornare dapibus mollis aenean.
                Nulla praesent, ut nibh neque ullamcorper. Sit ultricies,
                dignissim mauris a non, vel vestibulum dolor. Lorem ipsum dolor
                sit amet, sollicitudin mattis id habitasse massa proin, dui erat
                mauris magna, habitant etiam, massa quam.
              </p>
            </Col>
          </Row> */}
          <AboutText />
        </Container>
      </Fragment>
    );
  }
}
