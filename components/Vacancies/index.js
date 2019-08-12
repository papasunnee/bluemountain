import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import { InsightCard } from "../Global/Insight";
import SvgLoader from "bv-react-svgloader";

export default class InsightRow extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Container>
          <Row className="mt-5">
            <Col md={12}>
              <h2 style={{ fontWeight: "bold" }}>FEATURED VACANCIES</h2>
            </Col>
          </Row>

          <Row className="my-5">
            <Col md={6}>
              <h5
                className="mb-4"
                style={{ color: "#0069D1", fontWeight: "600" }}
              >
                List of Vacancies
              </h5>
              <Row>
                {JobArray.map((option, key) => {
                  return (
                    <Col md={6} key={key}>
                      <Job option={option} />
                    </Col>
                  );
                })}
              </Row>
            </Col>
            <Col md={6}>
              <div className="job__description">
                <h5
                  className="mb-4"
                  style={{ color: "#0069D1", fontWeight: "600" }}
                >
                  Job Details
                </h5>
                <hr />
                <div>
                  <p>
                    MONA Studios is a foremost photography studio that offers
                    image development with experience in supporting fashion
                    shows, weddings, corporate and social events and has its
                    core value embedded in customer-focused solutions in other
                    to meet our customers demand.
                  </p>
                  <p>We are recruiting to fill the position below:</p>
                  <p>
                    <strong>Job Position:</strong> Graphics Designer
                  </p>
                  <p>
                    <strong>Job Location:</strong>
                    Abuja, Nigeria
                  </p>
                  <p>
                    <strong>Responsibilities</strong>
                    <br /> - Assist in the planning and execution of various
                    marketing campaigns <br /> - Manage multiple projects from
                    concept to finish while meeting the high expectations of our
                    clients <br /> - Work directly with clients during the
                    design process <br /> - Supply initial proofs and revised
                    designs in a timely manner <br /> - Create Content for
                    social media pages. <br /> - Generating and coming up with
                    ideas/concepts, packaging designs, including shape, size,
                    colours, fonts and imagery <br /> - Provide constructive
                    input during team meetings and planning sessions <br /> -
                    Strong writing, editing and proofreading skills <br /> -
                    Ability to thrive within a fast-paced, agency-style
                    environment <br /> - Ability to handle changing priorities
                    and multiple projects simultaneously.
                  </p>
                  <p>
                    <strong>Job Requirements</strong>
                    <br /> - Must have worked in a photo studio based in Abuja
                    <br /> - Must have worked for more than 2 years in a photo
                    studio <br /> - Must be able to design a photobook and other
                    related studio work.
                  </p>
                  <p>
                    <strong>Remuneration</strong> <br />
                    Very attractive.
                  </p>
                  <p className="job__apply">
                    <button>Apply</button>
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

const JobArray = [
  {
    title: "Senior Back-end Developer",
    company: "Altitude Technology Worldwide",
    location: "Abuja, Nigeria",
    date: "27th April, 2019",
    type: "Fulltime",
    link: ""
  },
  {
    title: "Executive Direction",
    company: "Altitude Technology Worldwide",
    location: "Abuja, Nigeria",
    date: "27th April, 2019",
    type: "Fulltime",
    link: ""
  },
  {
    title: "Data Analyst",
    company: "Altitude Technology Worldwide",
    location: "Abuja, Nigeria",
    date: "27th April, 2019",
    type: "Fulltime",
    link: ""
  },
  {
    title: "Career Coach",
    company: "Altitude Technology Worldwide",
    location: "Abuja, Nigeria",
    date: "27th April, 2019",
    type: "Fulltime",
    link: ""
  }
];

const Job = props => {
  const { option = {} } = props;
  return (
    <Fragment>
      <div className="job mb-5">
        <div className="job__header">
          <SvgLoader src={`/static/svgs/images/logo.svg`} />
        </div>
        <div className="job__body">
          <div className="body__content">
            <h5>{option.title}</h5>
            <p className="conpany">{option.company}</p>
            <p className="location">
              {option.location} <span>{option.type}</span>
            </p>
          </div>
        </div>
        <div className="job__footer">
          <div>{option.date}</div>
          <div>View Details</div>
        </div>
      </div>
      <style>{`
      .job__apply{
          border-top : 1px solid #B2B2B2 ;
          text-align : right ;
      }
      .job__apply button{
          margin-top : 30px ;
          border : none ;
          padding : 5px 30px ;
          background-color : rgba(229, 206, 0, 0.95); 
          border-radius : 30px ;
          cursor : pointer ;
      }
      .job{
          max-width : 300px ;
          margin : auto ;
          position : relative ;
        }
        .job__header{
            border : 1px solid #DADADA ;
            min-height : 100px ;
            display : flex ;
            justify-content : center ;
            align-items : center ;
        }
        .job__body{
            border : 1px solid #DADADA ;
        }
        .body__content{
            padding : 20px 10px;
        }
        .body__content h5{
            font-size : 16px ;
            font-weight : bold ;
            color : #0069D1 ;
        }
        .body__content p{
            font-size : 10px ;   
        }
        .body__content .location{
            font-weight : bold ;
        }
        .body__content .location span{
            font-weight : normal ;
            display : block ;
        }
        .job__footer{
            font-weight : 500 ;
            padding : 20px 10px ;
            display : flex;
            justify-content : space-between ;
            align-items : center ;
            border : 1px solid #DADADA ;
            font-size : 12px ;
        }
        .job:hover .job__footer{
            background-color : #F8E600 ;
            cursor : pointer ;
        }
        .job__description{
            font-size : 12px ;
        }
      `}</style>
    </Fragment>
  );
};
