import React, { Component } from "react";
import Banner from "../../components/Header/Banner";
import Layout from "../../components/Layout";
import { Col, Container, Row } from "reactstrap";
import PartnerForm from "../../components/Sector/PartnerForm";

export default class extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Banner bgImage="about" min />
        <Container>
          <Row className="mb-5">
            <Col md={12} className="mt-5">
              <h1>WHY BECOME A PARTNER</h1>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col md={12}>
              <div>
                <p>
                  As you take the big step of running your division or
                  organization, getting the right talents on your executive team
                  is a key factor for achieving success in any organization.
                  Partnering with the right executing search group will save you
                  a lot of time, energy and resource with long lasting impact on
                  your organization.
                </p>
                <p>
                  Blue Mountain is here to help you get your dream team of
                  executive team. Our clients are our top priority and we build
                  long lasting mutual relationships with our clients by
                  providing top notch services and connecting them with niche
                  talents with awesome results.
                </p>
                <p>
                  When you partner with us, we ensure that you are connected
                  with the most qualified candidates not just those currently
                  looking for new jobs but we scoop the best for you even while
                  they are working for other organizations with our expert
                  persuasive skills we give you the best executive who possess
                  the right combination of experience, knowledge, skills and
                  talents that are rare and top-notch.
                </p>
                <p>
                  While searching for an executive position that has just been
                  created, we are your best contact to get the right blend of
                  talents that will best fit the position. Our training and
                  development courses help members of your organization’s
                  executive team to be qualified for the new position reducing
                  the lack of organizational policies challenge.
                </p>
                <p>
                  Partner with us today and watch us as we transform your
                  executive team and make your organization the best!
                </p>
              </div>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col md={6}>
              <img
                className="img img-fluid p-5"
                src="/static/images/manseat.png"
              />
            </Col>
            <Col md={6}>
              <div className="mt-5">
                <h3>
                  <span className="font-weight-bold">Be a Partner</span>
                </h3>
                <hr style={{ borderBottom: "4px solid #000" }} />
                <PartnerForm />
              </div>
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}
