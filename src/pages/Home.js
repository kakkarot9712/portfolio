import React from "react";
import Description from "../components/Home/Description";
import Intro from "../components/Home/Intro";
// import GHCalander from "../components/UI/GHCalander/GHCalander";

const Home = (props) => {
  return (
    <React.Fragment>
      <Intro />
      <Description />
      {/* <GHCalander /> */}
    </React.Fragment>
  );
};

export default Home;
