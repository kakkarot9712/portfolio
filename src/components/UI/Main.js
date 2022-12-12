import { Fragment } from "react";
import Footer from "../Footer/Footer";
import MainHeader from "../Mainheader/MainHeader";
import classes from "./Main.module.css";

const Main = (props) => {
  return (
    <Fragment>
      <MainHeader />
      <div className={classes.main}>{props.children}</div>
      <Footer />
    </Fragment>
  );
};

export default Main;
