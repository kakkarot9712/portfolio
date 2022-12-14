import HeaderBrand from "./HeaderBrand";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";
import classes from "./MainHeader.module.css";
import RepoIcon from "../UI/RepoIcon";
import { useState } from "react";

const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    // ---> check class
    <header className={classes.header}>
      <HeaderBrand openNav={openModal} />
      <MobileNav open={isOpen} closeNav={closeModal} />
      <MainNav />
      <RepoIcon />
    </header>
  );
};

export default MainHeader;
