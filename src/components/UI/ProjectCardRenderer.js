import SourceCodeSVG from "./SVGs/SourceCodeSVG";
import WebsiteDemoSVG from "./SVGs/WebsiteDemoSVG";
import classes from "./ProjectCardRenderer.module.css";

const ProjectCardRenderer = (props) => {
  const PROJECTS = props.projects;
  console.log(PROJECTS);
  return (
    <div className={classes["projects__container"]}>
      {PROJECTS.map((project) => {
        return (
          <div key={project._id} className={classes.project__card}>
            <div className={classes.project__img}>
              <img src={project.project_img_path} alt="todo app preview" />
            </div>
            <h2 className={classes.project__name}> {project.project_name} </h2>
            <p className={classes.project__description}>
              {project.project_description}
            </p>
            <p className={classes.project__languages}>
              {project.project_languages.join(" | ")}
            </p>
            <div className={classes.project__links}>
              <a
                className={`${classes.project__btn} ${classes.project__website}`}
                href={project.project_url}
              >
                <span className={classes["svg-span"]}>
                  <WebsiteDemoSVG />
                </span>
                &nbsp; Website Demo
              </a>
              <a
                className={`${classes.project__btn} ${classes.project__source}`}
                href={project.project_sourcecode}
              >
                <span className={classes["svg-span"]}>
                  <SourceCodeSVG />
                </span>
                &nbsp; Source Code
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCardRenderer;
