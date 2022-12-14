import { Link } from "react-router-dom";
import classes from "./HeaderBrand.module.css";
import brandImg from "../../assets/brand.png";

const HeaderBrand = (props) => {
  const MobileNavHandler = () => {
    props.openNav(true);
  };

  return (
    <div className={classes["header-brand"]}>
      <div className={classes["hamburger-btn"]} onClick={MobileNavHandler}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Link className={classes["header-brand__link"]} to="/">
        <img src={brandImg} alt="Brand Logo" />
      </Link>
    </div>
  );
};

export default HeaderBrand;
