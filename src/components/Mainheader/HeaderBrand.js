import { NavLink } from "react-router-dom";

const HeaderBrand = () => {
  return (
    <div class="header-brand">
      <div class="hamburger-btn">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <NavLink className="header-brand__link" to="/">
        <img
          src="../../assets/brand.png"
          alt="Brand Logo"
          class="header-brand__logo"
        />
      </NavLink>
    </div>
  );
};

export default HeaderBrand;
