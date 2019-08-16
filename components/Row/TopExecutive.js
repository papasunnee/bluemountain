import React, { Component, Fragment } from "react";
import dynamic from "next/dynamic";
import { Container, Row, Col } from "reactstrap";
// import AwesomeSlider from "react-awesome-slider";
// import { Slide } from "react-slideshow-image";
import DoubleParagraph from "./DoubleParagaph";
import "./Slider.css";

const AwesomeSlider = dynamic(() => import("react-awesome-slider/dist"), {
  ssr: false
});

const slideImages = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

export default class extends Component {
  state = { Slideshow: null };

  componentDidMount() {
    this.setState({
      Slideshow: (
        <AwesomeSlider>
          {slideImages.map((slideImage, key) => {
            return (
              <div key={key} data-src={`/static/images/slider/${slideImage}`} />
            );
          })}
        </AwesomeSlider>
      )
    });
  }
  render() {
    return (
      <Fragment>
        <Container style={{ margin: "80px auto" }}>
          <Row>
            <Col md="6" sm="12">
              <h6 className="text-primary mb-4">
                <span style={{ fontWeight: "bold", display: "block" }}>
                  Top Executive Retained Search Firm
                </span>
                Learn how our trusted executive search consultants can help you
              </h6>
              <DoubleParagraph />
            </Col>
            <Col md="6" sm="12">
              {/* <div className="darker" /> */}
              {this.state.Slideshow}
            </Col>
          </Row>
        </Container>
        <style jsx>
          {`
            .darker {
              height: 386px;
              background-color: #b2b2b2;
              background-image: url(/static/svgs/images/topexecutive.svg);
              background-position: center center;
              background-size: 100% 100%;
              background-repeat: no-repeat;
              transition: all linear 200ms;
              position: relative;
            }
            .darker::before {
              content: "";
              width: 100%;
              height: 100%;
              position: absolute;
              border-radius: 50%;
              background-color: transparent;
              box-shadow: 0px 0px 55px -9px rgba(0, 0, 0, 0.75);
              z-index: -1;
            }
            .darker:hover {
              background-color: #8e8e8e;
            }
            .aws-sld__content > img {
              height: auto !important ;
            }
          `}
        </style>
      </Fragment>
    );
  }
}

// const properties = {
//   duration: 5000,
//   transitionDuration: 500,
//   infinite: true,
//   indicators: true,
//   arrows: true,
//   onChange: (oldIndex, newIndex) => {
//     console.log(`slide transition from ${oldIndex} to ${newIndex}`);
//   }
// };

// const Slideshow = () => {
//   return (
//     <div className="slide-container">
//       <Slide {...properties}>
//         {slideImages.map((slideImage, key) => {
//           return (
//             <div className="each-slide" key={key}>
//               <div
//                 style={{
//                   backgroundImage: `url(/static/images/slider/${slideImage})`,
//                   backgroundRepeat: "no-repeat"
//                 }}
//               >
//                 {/* <span>Slide 1</span> */}
//               </div>
//             </div>
//           );
//         })}
//       </Slide>
//     </div>
//   );
// };
