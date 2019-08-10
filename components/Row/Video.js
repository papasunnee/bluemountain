import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import ReactPlayer from "react-player";

export default class Video extends Component {
  render() {
    return (
      <Container className="my-5">
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <div className="my-5">
              <VideoPlayer />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export const VideoPlayer = () => (
  <ReactPlayer
    width="inherit"
    url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
  />
);
