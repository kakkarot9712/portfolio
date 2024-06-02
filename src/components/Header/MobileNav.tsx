import { useRef } from "react";
import Backdrop from "@/UI/Backdrop";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

type MobileNavProps = {
  open: boolean;
  closeNav: () => void;
};

const MobileNav = (props: MobileNavProps) => {
  const navbarRef = useRef<HTMLDivElement>(null);
  return (
    <Backdrop in={props.open} closeNav={props.closeNav}>
      <motion.div
        transition={{ delay: 0.3 }}
        ref={navbarRef}
        animate={{
          x: props.open ? "60%" : 0,
        }}
      >
        <Navbar type="mobile" ref={navbarRef} />
      </motion.div>
    </Backdrop>
  );
};

export default MobileNav;
