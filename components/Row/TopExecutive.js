import React, { Component, Fragment } from "react";
import dynamic from "next/dynamic";
import { Container, Row, Col } from "reactstrap";
// import AwesomeSlider from "react-awesome-slider";
// import { Slide } from "react-slideshow-image";
import DoubleParagraph from "./DoubleParagaph";
import "./Slider.css";
import "./CustomSlider.css";

const AwesomeSlider = dynamic(() => import("react-awesome-slider/dist"), {
  ssr: false,
});

const slideImages = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
];

const CustomSlider = () => {
  return (
    <div className="slider">
      <h4 className="mb-3">WHY CHOOSE US</h4>
      <div className="slides">
        <div id="slide-1">
          <div className="overLay">1</div>
          Access difficuly-to-reach candidates at the top of their game
        </div>
        <div id="slide-2">
          <div className="overLay">2</div>
          Gain the professionalism, trust and confidentiality only outside
          trusted advisor can provide
        </div>
        <div id="slide-3">
          <div className="overLay">3</div>
          Ensure objectivity, based on the experience of many searches across
          industries, markets and roles
        </div>
        <div id="slide-4">
          <div className="overLay">4</div>
          Find and attract diverse candidates with highly marketable skills
        </div>
        <div id="slide-5">
          <div className="overLay">5</div>
          Leverage deep industry, market and functional expertise
        </div>
        <div id="slide-6">
          <div className="overLay">6</div>Assess candidates to identify the
          right talent
        </div>
        <div id="slide-7">
          <div className="overLay">7</div>
          Plan for succession, assessing internal talent and mapping the
          external marketplace
        </div>
        <div id="slide-8">
          <div className="overLay">8</div>Reduce the risk of the wrong hire
        </div>
      </div>
    </div>
  );
};

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
      ),
    });
  }
  render() {
    return (
      <Fragment>
        <Container style={{ margin: "80px auto" }}>
          <Row>
            <Col md="6" sm="12">
              <h4 className="text-primary mb-4 font-weight-bold">
                Our core mission is to identify, develop and deploy exceptional
                leadership talents across the globe.
              </h4>
              <DoubleParagraph />
            </Col>
            <Col md="6" sm="12">
              {/* <div className="darker" /> */}
              {/* {this.state.Slideshow} */}
              <CustomSlider />
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
