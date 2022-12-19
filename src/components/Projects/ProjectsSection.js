import { useEffect } from "react";
import useHttp from "../../hooks/useHttp";
import ProjectCardRenderer from "../UI/ProjectCardRenderer";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
import classes from "./ProjectsSection.module.css";

const ProjectsSection = () => {
  let content = <h1>No Projects Found!</h1>;
  const {
    isLoading,
    err,
    sendReq,
    data: projects,
  } = useHttp((res) => {
    return res.data.projects;
  });
  if (isLoading) {
    content = <LoadingSpinner />;
  }
  if (err) {
    content = <h1>{err}</h1>;
  }
  console.log(err);
  useEffect(() => {
    sendReq(`${process.env.REACT_APP_SERVER_URL}/projects`);
  }, []);

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
