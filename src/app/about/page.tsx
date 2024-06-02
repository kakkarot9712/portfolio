import { Suspense } from "react";
import AboutMe from "./AboutMe";
import Skillsets from "./Skillsets";
import Toolsets from "./ToolSets";
import LoadingSpinner from "@/UI/LoadingSpinner/LoadingSpinner";

const About = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <AboutMe />
      <h1 style={{ color: "white" }}>
        Languages and Frameworks{" "}
        <span className="color-text">
          <strong>I Know</strong>
        </span>{" "}
      </h1>
      <Suspense fallback={<LoadingSpinner />}>
        <Skillsets />
      </Suspense>
      <h1 style={{ color: "white" }}>
        Tools{" "}
        <span className="color-text">
          <strong>I Use</strong>
        </span>{" "}
      </h1>
      <Suspense fallback={<LoadingSpinner />}>
        <Toolsets />
      </Suspense>
    </Suspense>
  );
};

export default About;
