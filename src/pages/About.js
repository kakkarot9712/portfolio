import React from "react";
import AboutMe from "../components/About/AboutMe";
import Skillsets from "../components/About/Skillsets";
import Toolsets from "../components/About/ToolSets";

const About = (props) => {
  return (
    <React.Fragment>
      <AboutMe />
      <Skillsets />
      <Toolsets />
    </React.Fragment>
  );
};

export default About;
