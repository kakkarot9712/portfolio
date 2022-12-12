import React from "react";
import Contact from "../components/Home/Contact";
import Description from "../components/Home/Description";
import Intro from "../components/Home/Intro";

const Home = (props) => {
  return (
    <React.Fragment>
      <Intro />
      <Description />
      <Contact />
    </React.Fragment>
  );
};

export default Home;
