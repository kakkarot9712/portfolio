import { createPortal } from "react-dom";
import classes from "./Backdrop.module.css";

const Backdrop = (props) => {
  createPortal(
    <div className={classes.backdrop}>{props.children}</div>,
    document.getElementById("modal")
  );
};

export default Backdrop;

// TODO:
/* #backdrop [sideMenu]="mobileNav" */
/* <nav class="mobile-nav" #mobileNav> */
