import React from "react";
import "./touch.css";
import { Link } from "react-router-dom";

const Touch = () => {
  return (
    <>
      <div className="touch-wrapper">
        <div className="container">
          <div className="touch-main">
            <div className="regular-text mobile-text">
              <p>Get in touch</p>
            </div>
            <div className="touch-data">
              <div className="touch-left">
                <div className="regular-text">
                  <p>Get in touch</p>
                </div>
                <div className="block-title">
                  <h5>
                    Contact <br /> <span className="lightGreen">Swolsol</span>
                    <br /> for quote
                  </h5>
                </div>
              </div>
              <div className="touch-right">
                <div className="touch-right-box">
                  <img
                    src="images/touch-right.png"
                    alt="right"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <Link to="/">
              <div className="btn">
                <p className="regular-text">Write via Telegram</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Touch;
