import React from "react";
import Particles from "react-tsparticles";
import Divider from '@material-ui/core/Divider';

import './first.css'

// eslint-disable-next-line
export default () => (
  <div className="particles">
    <div 
        style={{
        position: "static",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        }}
    >    
    <header className="part-header">
            <div className="part-name">
                Francisco Almeida
                <Divider />
                <p className="part-desc">
                Interactive Resume
                </p>
            </div>
    </header>

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
                opacity: 0.2,
            },
            links: {
                color: "#000000",
                distance: 150,
                enable: true,
                opacity: 0.2,
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
                value: 100,
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
  </div>
);

