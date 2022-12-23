import { useRef } from "react";
import CSSTransition from "react-transition-group/CSSTransition";
import Backdrop from "../UI/Backdrop";
import classes from "./Navbar.module.css";
import Navbar from "./Navbar";

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
        <Navbar type="mobile" ref={navbarRef} />
      </Backdrop>
    </CSSTransition>
  );
};

export default MobileNav;
