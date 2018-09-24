import React, { Component, Fragment } from "react";
import Particles from "react-particles-js";

export default class ParticlesDemo extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <div className="contain">
          <Particles
            params={{
              particles: {
                number: {
                  value: 50,
                  density: {
                    enable: true,
                    value_area: 800
                  }
                }
              },
              interactivity: {
                detect_on: "window",
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse"
                  },
                  onclick: {
                    enable: true,
                    mode: "repulse"
                  },
                  resize: true
                },
                modes: {
                  grab: {
                    distance: 400,
                    line_linked: {
                      opacity: 1
                    }
                  },
                  bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4
                  },
                  push: {
                    particles_nb: 4
                  },
                  remove: {
                    particles_nb: 2
                  }
                }
              }
            }}
          />
          <div className="content">
            <h1>SUNDAY</h1>
          </div>
        </div>
        <style jsx>{`
          .contain {
            position: relative;
            background: linear-gradient(
              45deg,
              rgba(212, 181, 11, 1) 0%,
              rgba(0, 124, 255, 1) 100%
            );
            width: 100vw;
            height: 100vh;
            overflow: hidden;
          }
          .content {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
          h1 {
            position: absolute;
            margin: 0;
            padding: 0;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            color: #ffffff;
            font-size: 6em;
            padding: 20px;
            border: 1px solid #fff;
          }
          h1::before {
            content: "I am";
            display: block;
            text-align: left;
            font-size: 60px;
          }
        `}</style>
      </Fragment>
    );
  }
}
