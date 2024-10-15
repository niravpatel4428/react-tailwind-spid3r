import React from "react";
import './team.css';

const Team = () => {

  const teamData = [
    { imgSrc: "images/team1.png", altText: "team-person", handle: "@robert.t" },
    { imgSrc: "images/team2.png", altText: "team-person", handle: "@kraves" },
    { imgSrc: "images/team3.png", altText: "team-person", handle: "@gksiiis" },
    { imgSrc: "images/team4.png", altText: "team-person", handle: "@krystov" },
    { imgSrc: "images/team5.png", altText: "team-person", handle: "@wtirs" },
    { imgSrc: "images/team6.png", altText: "team-person", handle: "@hillar" },
  ];

  return (
    <>
     <div className="team-wrapper">
      <div className="container">
        <div className="team-main">
          <div className="team-data">
            <div className="title-box">
              <div className="regular-text">
                <p>Meet Our Team</p>
              </div>
            </div>
            <div className="team-box">
              {teamData.map((teamMember, index) => (
                <div key={index} className="team-item">
                  <div className="team-img">
                    <img
                      src={teamMember.imgSrc}
                      alt={teamMember.altText}
                      className="img-fluid"
                    />
                  </div>
                  <div className="team-title">
                    <h4>{teamMember.handle}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Team;
