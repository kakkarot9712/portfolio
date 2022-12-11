import HeaderBrand from "./HeaderBrand";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";
import classes from "./MainHeader.module.css";
import RepoIcon from "../UI/RepoIcon";

const MainHeader = () => {
  return (
    // ---> check class
    <header className={classes.header}>
      <HeaderBrand />
      <MobileNav />
      <MainNav />
      <RepoIcon />
    </header>
  );
};

export default MainHeader;
