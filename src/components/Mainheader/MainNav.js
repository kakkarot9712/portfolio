import { NavLink } from "react-router-dom";
import AboutSVG from "../UI/SVGs/AboutSVG";
import ContactSVG from "../UI/SVGs/ContactSVG";
import HomeSVG from "../UI/SVGs/Home";
import ProjectSVG from "../UI/SVGs/ProjectSVG";
import ResumeSVG from "../UI/SVGs/ResumeSVG";
import classes from "./MainNav.module.css";

const MainNav = () => {
  return (
    <nav className={classes["main-nav"]}>
      <ul className={classes["main-nav__items"]}>
        <li className={classes["main-nav__item"]}>
          <NavLink to="/">
            <span className={classes["svg-span"]}>
              <HomeSVG />
            </span>
            Home
          </NavLink>
        </li>
        <li className={classes["main-nav__item"]}>
          <NavLink to="/about">
            <span className={classes["svg-span"]}>
              <AboutSVG />
            </span>
            About
          </NavLink>
        </li>
        <li className={classes["main-nav__item"]}>
          <NavLink to="/projects">
            <span className={classes["svg-span"]}>
              <ProjectSVG />
            </span>
            Projects
          </NavLink>
        </li>
        <li className={classes["main-nav__item"]}>
          <NavLink to="/resume">
            <span className={classes["svg-span"]}>
              <ResumeSVG />
            </span>
            Resume
          </NavLink>
        </li>
        <li className={classes["main-nav__item"]}>
          <NavLink to="/contacts">
            <span className={classes["svg-span"]}>
              <ContactSVG />
            </span>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
