import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer-main">
            <Link to="/" className="footer-logo">
              <img
                src="images/footer-logo.svg"
                alt="footer-logo"
                className="img-fluid"
              />
            </Link>
            <div className="main-title">
              <h6>Build Magic Y Mas</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
