import React from "react";
import Particles from "react-tsparticles";
// eslint-disable-next-line
export default () => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: -1,
    }}
  >
    <Particles
      id="tsparticles"
      options={{
        background: {
            color: {
                value: "#ffffff"
            }
        },
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
          },
        },
        particles: {
          color: {
            value: "#000000",
          },
          links: {
            color: "#000000",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 130,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "square",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
  </div>
);

