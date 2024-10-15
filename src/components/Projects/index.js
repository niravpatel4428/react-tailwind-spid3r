import React from "react";
import "./project.css";

const projectData = [
  {
    id: 1,
    name: "Quekz",
    image: "images/project1.png",
    alt: "Quekz project",
  },
  {
    id: 2,
    name: "Dojo DB",
    image: "images/project2.png",
    alt: "Dojo DB project",
  },
  {
    id: 3,
    name: "Tensei",
    image: "images/project3.png",
    alt: "Tensei project",
  },
  {
    id: 4,
    name: "Soosh",
    image: "images/project4.png",
    alt: "Soosh project",
  },
];

const Projects = () => {
  return (
    <>
      <div className="project-wrapper">
        <div className="container">
          <div className="project-main">
            <div className="project-data">
              <div className="title-box">
                <div className="regular-text">
                  <p>Other Projects</p>
                </div>
              </div>
              <div className="project-box">
                {projectData.map((project) => (
                  <div className="project-item" key={project.id}>
                    <div className="project-img">
                      <img
                        src={project.image}
                        alt={project.alt}
                        className="img-fluid object-fit-cover"
                      />
                    </div>
                    <div className="project-title">
                      <h4>{project.name}</h4>
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

export default Projects;
