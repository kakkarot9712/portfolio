import { useEffect } from "react";
import useHttp from "../../hooks/useHttp";
import ProjectCardRenderer from "../UI/ProjectCardRenderer";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
import classes from "./ProjectsSection.module.css";

const ProjectsSection = () => {
  let content = <h1>No Projects Found!</h1>;
  const { isLoading, err, sendReq, data: projects } = useHttp();
  if (isLoading) {
    content = <LoadingSpinner />;
  }
  if (err) {
    content = <h1>{err}</h1>;
  }
  useEffect(() => {
    sendReq(`${process.env.REACT_APP_SERVER_URL}/projects`, (res) => {
      return res.data.projects;
    });
  }, [sendReq]);

  if (projects.length !== 0) {
    content = <ProjectCardRenderer projects={projects} />;
  }
  return (
    <section className={classes.section}>
      <h1>
        My Recent <span className="color-text">Projects</span>
      </h1>
      <p>Here are few projects I worked on recently</p>
      {content}
    </section>
  );
};

export default ProjectsSection;
