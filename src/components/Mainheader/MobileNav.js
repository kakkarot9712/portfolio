import { useRef } from "react";
import { NavLink } from "react-router-dom";
import CSSTransition from "react-transition-group/CSSTransition";
import Backdrop from "../UI/Backdrop";
import AboutSVG from "../UI/SVGs/AboutSVG";
import ContactSVG from "../UI/SVGs/ContactSVG";
import HomeSVG from "../UI/SVGs/Home";
import ProjectSVG from "../UI/SVGs/ProjectSVG";
import ResumeSVG from "../UI/SVGs/ResumeSVG";
import classes from "./MobileNav.module.css";

const MobileNav = (props) => {
  const navbarRef = useRef();
  return (
    <CSSTransition
      in={props.open}
      timeout={500}
      nodeRef={navbarRef}
      classNames={{
        enterActive: classes["open"],
        enterDone: classes["open"],
        exitDone: classes["close"],
        exitActive: classes["close"],
      }}
    >
      <Backdrop in={props.open} closeNav={props.closeNav}>
        <nav className={classes["mobile-nav"]} ref={navbarRef}>
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
    </CSSTransition>
  );
};

export default MobileNav;
