import { forwardRef } from "react";
import { NavLink } from "react-router-dom";
import AboutSVG from "../UI/SVGs/AboutSVG";
import ContactSVG from "../UI/SVGs/ContactSVG";
import HomeSVG from "../UI/SVGs/Home";
// import ProjectSVG from "../UI/SVGs/ProjectSVG";
import ResumeSVG from "../UI/SVGs/ResumeSVG";
import classes from "./Navbar.module.css";

const Navbar = (props, ref) => {
  return (
    <nav className={classes[`${props.type}-nav`]} ref={ref}>
      <ul className={classes[`${props.type}-nav__items`]}>
        <li className={classes[`${props.type}-nav__item`]}>
          <NavLink
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            to="/"
          >
            <span className={classes["svg-span"]}>
              <HomeSVG />
            </span>
            Home
          </NavLink>
        </li>
        <li className={classes[`${props.type}-nav__item`]}>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            <span className={classes["svg-span"]}>
              <AboutSVG />
            </span>
            About
          </NavLink>
        </li>
        {/* <li className={classes[`${props.type}-nav__item`]}>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            <span className={classes["svg-span"]}>
              <ProjectSVG />
            </span>
            Projects
          </NavLink>
        </li> */}
        <li className={classes[`${props.type}-nav__item`]}>
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            <span className={classes["svg-span"]}>
              <ResumeSVG />
            </span>
            Resume
          </NavLink>
        </li>
        <li className={classes[`${props.type}-nav__item`]}>
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
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

export default forwardRef(Navbar);
