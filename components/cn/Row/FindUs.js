import React, { Component, Fragment } from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import SvgLoader from "bv-react-svgloader";
import "./findus.scss";

export default class FindUs extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Container fluid style={{ marginTop: "-32px" }}>
          <Row>
            <Col
              xs="12"
              md="6"
              style={{
                backgroundColor: "#F0F0F0",
                padding: "0px"
              }}
            >
              <div
                style={{
                  display: "absolute",
                  width: "70%",
                  marginLeft: "30%",
                  marginTop: "-20%",
                  backgroundColor: "#F0F0F0"
                }}
              >
                <div
                  style={{
                    backgroundColor: "#fff",
                    padding: "20px",
                    height: "280px",
                    overflow: "hidden"
                  }}
                >
                  <h3>Lorem ipsum dolor sit amet</h3>
                  <hr />
                  <p>
                    Lorem ipsum dolor sit amet, sollicitudin mattis id habitasse
                    massa proin, dui erat mauris magna, habitant etiam, massa
                    quam at egestas a felis eros, non egestas ornare dapibus
                    mollis aenean. Nulla praesent, ut nibh neque ullamcorper.
                    Sit ultricies, dignissim mauris a non, vel vestibulum dolor.
                    Vestibulum interdum suspendisse
                  </p>
                </div>
                <div style={{ padding: "20px" }}>
                  <h3 className="display-6">Clients</h3>
                  <p>
                    Lorem ipsum dolor sit amet, sollicitudin mattis id habitasse
                    massa proin, dui erat mauris magna, habitant etiam, massa
                    quam at egestas a felis eros, non egestas ornare dapibus
                    mollis aenean. Nulla praesent, ut nibh neque ullamcorper.
                    Sit ultricies, dignissim mauris a non, vel vestibulum dolor.
                    Vestibulum interdum suspendisse
                  </p>
                  <p style={{ textAlign: "right" }}>
                    <Link href="/consulting-network/discuss-project" prefetch>
                      <a
                        style={{
                          backgroundColor: "#0069D1",
                          color: "#fff",
                          fontSize: "12px",
                          padding: " 5px 10px ",
                          display: "inline-block",
                          borderRadius: "5px",
                          textDecoration: "none"
                        }}
                      >
                        Discuss your project with us
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </Col>
            <Col
              xs="12"
              md="6"
              style={{
                backgroundColor: "#DADADA",
                padding: "0px"
              }}
            >
              <div
                style={{
                  display: "absolute",
                  width: "70%",
                  marginTop: "-20%",
                  backgroundColor: "#DADADA"
                }}
              >
                <div
                  style={{
                    backgroundColor: "#4285F4",
                    color: "#fff",
                    padding: "20px",
                    height: "280px",
                    overflow: "hidden"
                  }}
                >
                  <p>
                    Lorem ipsum dolor sit amet, sollicitudin mattis id habitasse
                    massa proin, dui erat mauris magna, habitant etiam, massa
                    quam at egestas a felis eros, non egestas ornare dapibus
                    mollis aenean. Nulla praesent, ut nibh neque ullamcorper.
                    Sit ultricies, dignissim mauris a non, vel vestibulum dolor.
                    Vestibulum interdum suspendisse mollis aenean. Nulla
                    praesent, ut nibh neque ullamcorper. Sit ultricies,
                    dignissim mauris a non, vel vestibulum dolor. Vestibulum
                    interdum suspendisse
                  </p>
                </div>
                <div style={{ padding: "20px" }}>
                  <h3 className="display-6">Consultants</h3>
                  <p>
                    Lorem ipsum dolor sit amet, sollicitudin mattis id habitasse
                    massa proin, dui erat mauris magna, habitant etiam, massa
                    quam at egestas a felis eros, non egestas ornare dapibus
                    mollis aenean. Nulla praesent, ut nibh neque ullamcorper.
                    Sit ultricies, dignissim mauris a non, vel vestibulum dolor.
                    Vestibulum interdum suspendisse
                  </p>
                  <p style={{ textAlign: "right" }}>
                    <Link href="/consulting-network/apply-to-join" prefetch>
                      <a
                        style={{
                          backgroundColor: "#DD071C",
                          color: "#fff",
                          fontSize: "12px",
                          padding: " 5px 10px ",
                          display: "inline-block",
                          borderRadius: "5px",
                          textDecoration: "none"
                        }}
                      >
                        Apply to Join our Network
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
