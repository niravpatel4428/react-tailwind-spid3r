import React, { useState } from "react";
import "./tabbing.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const tabData = [
  {
    cls: "h-item-1",
    title: "Moonwalk App",
    image: "images/moonwalk.png",
    imageLogo: "images/animation1.png",
    details: [
      "some stuff",
      "some stuff",
      "some stuff",
      "some stuff",
      "some stuff",
      "some stuff",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Aenean massa.",
    vimg: "images/video1.png",
    sliderImages: [
      "images/slide1.png",
      "images/slide2.png",
      "images/slide4.png",
    ], // Add slider images here
    sbg: "images/sbg1.png",
  },
  {
    cls: "h-item-2",
    title: "GolfN App",
    image: "images/golfn.png",
    imageLogo: "images/animation2.png",
    details: [
      "some stuff",
      "some stuff",
      "some stuff",
      "some stuff",
      "some stuff",
      "some stuff",
    ],
    description: "Different description for GolfN App.",
    vimg: "images/video2.png",
    sliderImages: [
      "images/slide1.png",
      "images/slide2.png",
      "images/slide4.png",
    ], // Add slider images here
    sbg: "images/sbg2.png",
  },
  {
    cls: "h-item-3",
    title: "Bonk!",
    image: "images/bonk.png",
    imageLogo: "images/animation3.png",
    details: [
      "some stuff",
      "some stuff",
      "some stuff",
      "some stuff",
      "some stuff",
      "some stuff",
    ],
    description: "Different description for Bonk!",
    vimg: "images/video2.png",
    sliderImages: [
      "images/slide1.png",
      "images/slide2.png",
      "images/slide4.png",
    ], // Add slider images here
    sbg: "images/sbg3.png",
  },
  {
    cls: "h-item-4",
    title: "Axiom Caching",
    image: "images/axiom.png",
    imageLogo: "images/animation4.png",
    details: [
      "more stuff",
      "more stuff",
      "more stuff",
      "more stuff",
      "more stuff",
      "more stuff",
    ],
    description: "Different description for Axiom Caching.",
    vimg: "images/video4.png",
    sliderImages: [
      "images/slide1.png",
      "images/slide2.png",
      "images/slide4.png",
    ], // Add slider images here
    sbg: "images/sbg4.png",
  },
];

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      type="button"
      className={`slick-prev ${className}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M4 11.25C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75L4 11.25ZM20 12.75L20.75 12.75L20.75 11.25L20 11.25L20 12.75ZM4 12.75L20 12.75L20 11.25L4 11.25L4 12.75Z"
          fill="#FEFEFE"
        />
        <path
          d="M8.99996 7L4 12L9 17"
          stroke="#FEFEFE"
          strokeWidth="1.5"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      type="button"
      className={`slick-next ${className}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M20 12.75C20.4142 12.75 20.75 12.4142 20.75 12C20.75 11.5858 20.4142 11.25 20 11.25L20 12.75ZM4 11.25L3.25 11.25L3.25 12.75L4 12.75L4 11.25ZM20 11.25L4 11.25L4 12.75L20 12.75L20 11.25Z"
          fill="#FEFEFE"
        />
        <path
          d="M15 17L20 12L15 7"
          stroke="#FEFEFE"
          strokeWidth="1.5"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

const Tabbing = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [activeTab, setActiveTab] = useState(0);

  var settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    prevArrow: <PrevArrow />, // Custom Previous Arrow
    nextArrow: <NextArrow />, // Custom Next Arrow
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const currentTab = tabData[activeTab];
  return (
    <div className="tabbing-wrapper">
      <div className="container">
        <div className="tabbing-main">
          <div className="tabbing-header">
            {tabData.map((tab, index) => (
              <div
                key={index}
                className={`header-item ${tab.cls} ${
                  index === activeTab ? "active" : ""
                }`}
                onClick={() => handleTabClick(index)}
              >
                <img
                  src={tab.imageLogo}
                  alt={`animation${index + 1}`}
                  className="img-fluid"
                />
                <div className="regular-text">
                  <h3>{tab.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="tabbing-fixed-slides">
            {/* List */}
            <div className="fixed-item fixed-detail">
              <div className="img-logo">
                <img
                  src={currentTab.image}
                  alt={currentTab.title}
                  className="img-fluid"
                />
              </div>
              <div className="list-data">
                {currentTab.details.map((detail, index) => (
                  <div className="stuff-data" key={index}>
                    <img
                      src="images/stuff.svg"
                      alt="stuff"
                      className="img-fluid"
                    />
                    <div className="regular-text">
                      <h4>{detail}</h4>
                    </div>
                  </div>
                ))}
              </div>
              <div className="main-detail">
                <p>{currentTab.description}</p>
              </div>
            </div>

            {/* Slider */}
            <div className="fixed-item fixed-slider">
              <Slider {...settings}>
                {currentTab.sliderImages.map((image, index) => (
                  <div className="slide-img" key={index}>
                    <img
                      src={image}
                      alt={`slide ${index + 1}`}
                      className="img-fluid"
                    />
                  </div>
                ))}
              </Slider>
              <img
                src={currentTab.sbg}
                alt="sbg"
                className="img-fluid slide-bg-img"
              />
            </div>

            {/* Video */}
            <div className="fixed-item fixed-video">
              <img src={currentTab.vimg} alt="video" className="img-fluid" />
              <Link to="/" className="bg-blured">
                <img
                  src="images/triangle.svg"
                  alt="triangle"
                  className="img-fluid"
                />
              </Link>
            </div>
          </div>

          {/* Conditionally Render the Background Shape */}
          {activeTab === 0 && (
            <>
              <img
                src="images/bgshape1.png"
                alt="bg-shape"
                className="img-fluid bg-shape d-none d-lg-block"
              />
              <img
                src="images/bgshapet1.png"
                alt="bg-shape"
                className="img-fluid bg-shape d-none d-md-block d-lg-none"
              />
              <img
                src="images/bgshapem1.png"
                alt="bg-shape"
                className="img-fluid bg-shape d-block d-md-none"
              />
            </>
          )}
          {activeTab === 1 && (
            <>
              <img
                src="images/bgshape2.png"
                alt="bg-shape"
                className="img-fluid bg-shape d-none d-lg-block"
              />
              <img
                src="images/bgshapet2.png"
                alt="bg-shape"
                className="img-fluid bg-shape d-none d-md-block d-lg-none"
              />
              <img
                src="images/bgshapem2.png"
                alt="bg-shape"
                className="img-fluid bg-shape d-block d-md-none"
              />
            </>
          )}
          {activeTab === 2 && (
            <>
              <img
                src="images/bgshape3.png"
                alt="bg-shape"
                className="img-fluid bg-shape d-none d-lg-block"
              />
              <img
                src="images/bgshapet3.png"
                alt="bg-shape"
                className="img-fluid bg-shape d-none d-md-block d-lg-none"
              />
              <img
                src="images/bgshapem3.png"
                alt="bg-shape"
                className="img-fluid bg-shape d-block d-md-none"
              />
            </>
          )}
          {activeTab === 3 && (
            <>
              <img
                src="images/bgshape4.png"
                alt="bg-shape"
                className="img-fluid bg-shape d-none d-lg-block"
              />
              <img
                src="images/bgshapet4.png"
                alt="bg-shape"
                className="img-fluid bg-shape d-none d-md-block d-lg-none"
              />
              <img
                src="images/bgshapem4.png"
                alt="bg-shape"
                className="img-fluid bg-shape d-block d-md-none"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabbing;
