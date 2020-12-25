import React from "react";
import Particles from "react-tsparticles";


// eslint-disable-next-line
export default () => (
  <div className="particles">
    <div 
        style={{
        position: "static",
        top: 0,
        left: 0,
        width: "100%",
        height: "50%",
        zIndex: 0,
        }}
    >    
    <Particles
        id="tsparticles"
        options={{
            backgroundMode: {
                enable: false,
                zIndex: 0
              },
              fpsLimit: 60,
              particles: {
                number: {
                  value: 50,
                  density: {
                    enable: true,
                    value_area: 600 //Denser the smaller the number.
                  }
                },
                color: {
                  //The color for every node, not the connecting lines.
                  value: "#000000" //Or use an array of colors like ["#9b0000", "#001378", "#0b521f"]
                },
                shape: {
                  type: "square", // Can show circle, edge (a square), triangle, polygon, star, img, or an array of multiple.
                  stroke: {
                    //The border
                    width: 1,
                    color: "#000000"
                  },
                  polygon: {
                    //if the shape is a polygon
                    nb_sides: 6
                  },
                  image: {
                    //If the shape is an image
                    src: "",
                    width: 100,
                    height: 100
                  }
                },
                opacity: {
                  value: 0.7,
                  random: true
                },
                size: {
                  value: 8,
                  random: true
                },
                line_linked: {
                  enable: true,
                  distance: 225, //The radius before a line is added, the higher the number the more lines.
                  color: "#000000",
                  opacity: 0.2,
                  width: 2
                },
                move: {
                  enable: true,
                  speed: 1,
                  direction: "top", //Move them off the canvas, either "none", "top", "right", "bottom", "left", "top-right", "bottom-right" et cetera...
                  random: true,
                  straight: false, //Whether they'll shift left and right while moving.
                  out_mode: "out", //What it'll do when it reaches the end of the canvas, either "out" or "bounce".
                  bounce: false,
                  attract: {
                    //Make them start to clump together while moving.
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                  }
                }
              },
              retina_detect: true
        }}
    />
    
    </div>
  </div>
);

