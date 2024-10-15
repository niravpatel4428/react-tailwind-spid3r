import React from "react";
import "./banner1.css";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const animationImages = [
  "images/animation1.png",
  "images/animation2.png",
  "images/animation3.png",
  "images/animation4.png",
  "images/animation1.png",
  "images/animation2.png",
  "images/animation3.png",
  "images/animation4.png",
  "images/animation1.png",
  "images/animation2.png",
  "images/animation3.png",
  "images/animation4.png",
];

const solImages = [
  { src: "images/sol-left-1.png", alt: "sol", className: "sol-1" },
  { src: "images/sol-top-2.png", alt: "sol", className: "sol-2" },
  { src: "images/sol-right-3.png", alt: "sol", className: "sol-3" },
  { src: "images/sol-bottom-4.png", alt: "sol", className: "sol-4" },
];

const Banner1 = () => {
  return (
    <>
      <div className="banner-wrapper-1">
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
                <Link to="/" className="btn">
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
            <div className="animation-box">
              <Marquee
                direction="down"
                pauseOnHover="false"
                className="animation-desktop-main"
              >
                {animationImages.map((image, idx) => (
                  <div key={idx}>
                    <img
                      src={image}
                      alt={`animation-${idx + 1}`}
                      className="animation-item img-fluid"
                    />
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
        <div className="mobile-animation">
          <div className="mobile-box">
            <Marquee
              direction="down"
              pauseOnHover="true"
              className="animation-desktop-main"
            >
              {animationImages.map((image, idx) => (
                <div key={idx}>
                  <img
                    src={image}
                    alt={`animation-${idx + 1}`}
                    className="animation-item img-fluid"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
        {solImages.map((sol, idx) => (
          <img
            key={idx}
            src={sol.src}
            alt={sol.alt}
            className={`img-fluid ${sol.className}`}
          />
        ))}
        <div className="round1"></div>
        <div className="round2"></div>
        <div className="round3"></div>
        <div className="round4"></div>
      </div>
    </>
  );
};

export default Banner1;
