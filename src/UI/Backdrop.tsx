import { ReactNode } from "react";
import classes from "./Backdrop.module.css";
import { motion } from "framer-motion";

type BackdropProps = {
  in: boolean;
  closeNav: () => void;
  children: ReactNode;
};

const Backdrop = (props: BackdropProps) => {
  const modal = (
    <motion.div
      animate={{
        opacity: props.in ? 1 : 0,
        display: props.in ? "block" : "none",
      }}
      hidden={false}
      transition={{ delay: 0.45 }}
      className={classes.backdrop}
      onClick={props.closeNav}
    >
      {props.children}
    </motion.div>
  );

  return modal;
};

export default Backdrop;
