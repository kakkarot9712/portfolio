import Link from "next/link";
import Image from "next/image";
import classes from "./HeaderBrand.module.css";

type HeaderBrandProps = {
  openNav: () => void;
};

const HeaderBrand = (props: HeaderBrandProps) => {
  const MobileNavHandler = () => {
    props.openNav();
  };

  return (
    <div className={classes["header-brand"]}>
      <div className={classes["hamburger-btn"]} onClick={MobileNavHandler}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Link className={classes["header-brand__link"]} href="/">
        <Image fill src="/brand.png" alt="Brand Logo" sizes="75px" />
      </Link>
    </div>
  );
};

export default HeaderBrand;
