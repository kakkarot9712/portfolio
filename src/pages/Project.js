import React from "react";
import PortfolioInfo from "../components/Projects/PortfolioInfo";
import ProjectsSection from "../components/Projects/ProjectsSection";

const Projects = (props) => {
  return (
    <React.Fragment>
      <ProjectsSection />
      <PortfolioInfo />
    </React.Fragment>
  );
};

export default Projects;
