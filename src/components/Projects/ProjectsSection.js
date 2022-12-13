import ProjectCardRenderer from "../UI/ProjectCardRenderer";
import classes from "./ProjectsSection.module.css";

const ProjectsSection = () => {
  const PROJECTS = [
    {
      project_name: "TODO App",
      project_description:
        "In this app, user can add tasks, can mark as important or completed and can delete task. This app stores data inside local storage and user even can use cloud mode.",
      project_img_path: "../assets/imgs/todoapp.png",
      project_languages: "HTML | CSS | BOOTSTRAP | ANGULAR",
      project_url: "https://todoapp-ee61f.web.app/todo",
      project_sourcecode: "https://github.com/kakkarot9712/ToDoApp",
    },
    {
      project_name: "Expense Tracker",
      project_description:
        "User can add and track expenses with support for graphical visualization and comparison of monthly expenses.This app also supports storing data locally and thus it will retain data after refresh.",
      project_img_path: "../assets/imgs/expense-tracker.png",
      project_languages: "HTML | CSS | ANGULAR",
      project_url: "https://id11297.web.app/home",
      project_sourcecode: "https://github.com/kakkarot9712/Expense-Tracker",
    },
    {
      project_name: "Tic-Tac-Toe",
      project_description:
        "Just simple Tic-tac-toe game with few small features including capability of changing name.  Note:- This app is part of WebAppsCollection Project",
      project_img_path: "../assets/imgs/tic-tac-toe.png",
      project_languages: "HTML | CSS | BOOTSTRAP | ANGULAR",
      project_url: "https://webappscollection.web.app/tic-tac-toe",
      project_sourcecode: "https://github.com/kakkarot9712/WebAppsCollection",
    },
    {
      project_name: "News Feed",
      project_description:
        "In this website, User can search for Latest headlines in multiple supported category or user can search news with custom params, This app is also part of WebAppsCollection Project",
      project_img_path: "../assets/imgs/news-feed-home.png",
      project_languages: "HTML | CSS | BOOTSTRAP | ANGULAR",
      project_url: "https://webappscollection.web.app/newsfeed",
      project_sourcecode: "https://github.com/kakkarot9712/WebAppsCollection",
    },
    {
      project_name: "Wall Clock",
      project_description:
        "Just a simple wall-clock demo, first made using HTML, CSS and JavaScript and then tweaked for Angular. This app is also part of WebAppsCollection Project",
      project_img_path: "../assets/imgs/wall-clock.png",
      project_languages: "HTML | CSS | JAVASCRIPT | ANGULAR",
      project_url: "https://webappscollection.web.app/clock",
      project_sourcecode: "https://github.com/kakkarot9712/WebAppsCollection",
    },
  ];

  return (
    <section className={classes.section}>
      <h1>
        My Recent <span className="color-text">Projects</span>
      </h1>
      <p>Here are few projects I worked on recently</p>
      <ProjectCardRenderer projects={PROJECTS} />
    </section>
  );
};

export default ProjectsSection;
