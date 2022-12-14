import { useRef } from "react";
import { createPortal } from "react-dom";
import CSSTransition from "react-transition-group/CSSTransition";
import classes from "./Backdrop.module.css";

const Backdrop = (props) => {
  const backdropRef = useRef();
  const modal = (
    <CSSTransition
      in={props.in}
      nodeRef={backdropRef}
      timeout={350}
      classNames={{
        enter: classes.shown,
        enterDone: classes.shown,
        exit: classes.shown,
        exitDone: classes.hidden,
      }}
    >
      <div
        className={classes.backdrop}
        onClick={props.closeNav}
        ref={backdropRef}
      >
        {props.children}
      </div>
    </CSSTransition>
  );
  return createPortal(modal, document.getElementById("modal"));
};

export default Backdrop;
