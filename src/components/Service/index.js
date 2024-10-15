import React from "react";
import "./service.css";

const Service = () => {
  const servicesData = [
    {
      imgSrc: "images/service1.svg",
      altText: "Development",
      title: "Development",
    },
    {
      imgSrc: "images/service5.svg",
      altText: "User Interface",
      title: "User Interface",
    },
    {
      imgSrc: "images/service2.svg",
      altText: "iOS/Android Apps",
      title: "iOS/Android Apps",
    },
    { imgSrc: "images/service6.svg", altText: "Branding", title: "Branding" },
    {
      imgSrc: "images/service3.svg",
      altText: "Smart Contracts",
      title: "Smart Contracts",
    },
    {
      imgSrc: "images/service7.svg",
      altText: "Illustration",
      title: "Illustration",
    },
    {
      imgSrc: "images/service4.svg",
      altText: "Smart Stuff",
      title: "Smart Stuff",
    },
  ];

  return (
    <>
      <div className="services-wrapper">
        <div className="container">
          <div className="services-main">
            <div className="regular-text">
              <h4>Services</h4>
            </div>
            <div className="services-box">
              <ul>
                {servicesData.map((service, index) => (
                  <li key={index} className="services-item">
                    <img
                      src={service.imgSrc}
                      alt={service.altText}
                      className="img-fluid"
                    />
                    <div className="regular-title">
                      <h3>{service.title}</h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
