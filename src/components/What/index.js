import React from "react";
import "./what.css";
const What = () => {
  return (
    <>
      <div className="what-wrapper">
        <div className="container">
          <div className="what-main">
            <div className="what-left">
              <div className="regular-text">What we do</div>
            </div>
            <div className="what-right">
              <div className="block-title">
                <h2>
                  We specialize in <br />
                  <span className="lightGreen">Web3 adoption</span> with <br />
                  normies.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default What;
