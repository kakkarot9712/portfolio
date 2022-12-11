import { NavLink } from "react-router-dom";
import Backdrop from "../UI/Backdrop";
import AboutSVG from "../UI/SVGs/AboutSVG";
import ContactSVG from "../UI/SVGs/ContactSVG";
import HomeSVG from "../UI/SVGs/Home";
import ProjectSVG from "../UI/SVGs/ProjectSVG";
import ResumeSVG from "../UI/SVGs/ResumeSVG";
import classes from "./MobileNav.module.css";

const MobileNav = () => {
  return (
    <Backdrop>
      <nav className={classes["mobile-nav"]} /*#mobileNav*/>
        <ul className={classes["mobile-nav__items"]}>
          <li className={classes["mobile-nav__item"]}>
            <NavLink to="/">
              <span>
                <HomeSVG />
              </span>
              Home
            </NavLink>
          </li>
          <li className={classes["mobile-nav__item"]}>
            <NavLink to="/about">
              <span>
                <AboutSVG />
              </span>
              About
            </NavLink>
          </li>
          <li className={classes["mobile-nav__item"]}>
            <NavLink to="/projects">
              <span>
                <ProjectSVG />
              </span>
              Projects
            </NavLink>
          </li>
          <li className={classes["mobile-nav__item"]}>
            <NavLink to="/resume">
              <span>
                <ResumeSVG />
              </span>
              Resume
            </NavLink>
          </li>
          <li className={classes["mobile-nav__item"]}>
            <NavLink to="/contacts">
              <span>
                <ContactSVG />
              </span>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </Backdrop>
  );
};

export default MobileNav;
