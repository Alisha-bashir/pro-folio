import React from "react";
import "./StartupProjects.css";
import { Button, Card } from "react-bootstrap";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";

export default function StartupProject() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p className="subTitle project-subtitle">{bigProjects.subtitle}</p>
          <div className="startup-projects-main">
            <div className="startup-project-text">
              {bigProjects.projects.map((project) => {
                return (
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={project.image}
                      style={{ width: "100%", height: "260px" }}
                    />
                    <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                      <Card.Text>{project.text}</Card.Text>
                      <Button
                        className="button1"
                        onClick={() => openProjectInNewWindow(project.link)}
                      >
                        See Project
                      </Button>
                    </Card.Body>
                  </Card>
                );
              })}
            </div>
            <div className="starup-project-image"></div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
