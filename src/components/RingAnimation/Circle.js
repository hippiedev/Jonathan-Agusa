import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Circle.scss";

function Circle(props) {
  let elem = useRef(null);

  useEffect(() => {
      gsap.from(elem, {
        opacity: 0,
        duration: 1.5,
        ease: "ease-in",
        delay: 1.5,
      });
  });
  return (
    <React.Fragment>
      <div
        ref={(el) => (elem = el)}
        style={{ position: "relative", top: "-70px"}}
        className="circle"
      ></div>
      <svg>
        <filter id="wavy">
          <feTurbulence
            x="0"
            y="0"
            baseFrequency="0.009"
            numOctaves="5"
            seed="2"
          >
            <animate
              attributeName="baseFrequency"
              dur="60s"
              values="0.02;0.005;0.02"
              repeatCount="indefinite"
            ></animate>
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="30"></feDisplacementMap>
        </filter>
      </svg>
    </React.Fragment>
  );
}

export default Circle;
