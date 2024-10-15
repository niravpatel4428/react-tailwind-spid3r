import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./banner2.css";

const Banner2 = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  // Function to calculate the transform position based on cursor movement
  const getTransformStyle = (xFactor, yFactor) => {
    const { x, y } = mousePosition;
    return {
      transform: `translate(${xFactor * x}px, ${yFactor * y}px)`,
      transition: "transform 0.1s ease-out",
    };
  };

  return (
    <div className="banner-wrapper-2" onMouseMove={handleMouseMove}>
      <div className="banner-inner-wrapper">
        <div className="container">
          <div className="banner-main">
            <div className="banner-details">
              <Link to="/" target="_blank" className="banner-logo">
                <img
                  src="images/banner-logo.svg"
                  alt="banner-logo"
                  className="img-fluid"
                />
              </Link>
              <div className="banner-data">
                <Link to="#" className="btn">
                  GM!
                </Link>
                <div className="main-title">
                  <h1>
                    Shipping <br />
                    projects on{" "}
                  </h1>
                </div>
                <div className="banner-logo-box">
                  <div className="logo-item-1">
                    <img
                      src="images/banner-l-1.png"
                      alt="banner"
                      className="img-fluid"
                    />
                  </div>
                  <div className="logo-item-2">
                    <img
                      src="images/banner-l-2.svg"
                      alt="banner"
                      className="img-fluid"
                    />
                  </div>
                  <div className="main-title">
                    <h2>y mas</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Animation Images with Mouse Movement */}
          <img
            src="images/animation1.png"
            alt="animation"
            className="img-fluid animation-1"
            style={getTransformStyle(0.02, 0.02)} // Adjust movement factor
          />
          <img
            src="images/animation2.png"
            alt="animation"
            className="img-fluid animation-2"
            style={getTransformStyle(0.03, 0.02)}
          />
          <img
            src="images/animation3.png"
            alt="animation"
            className="img-fluid animation-3"
            style={getTransformStyle(0.04, 0.03)}
          />
          <img
            src="images/animation4.png"
            alt="animation"
            className="img-fluid animation-4"
            style={getTransformStyle(0.05, 0.04)}
          />
        </div>
      </div>
      <img src="images/sol-left-1.png" alt="sol" className="img-fluid sol-1" />
      <img src="images/sol-right-3.png" alt="sol3" className={`sol-3`} />
      <div className="round1"></div>
      <div className="round2"></div>
      <div className="round3"></div>
      <div className="round4"></div>
    </div>
  );
};

export default Banner2;
