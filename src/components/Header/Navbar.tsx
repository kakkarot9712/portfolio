import { LegacyRef, forwardRef } from "react";
import { usePathname } from "next/navigation";
import AboutSVG from "@/UI/SVGs/About";
import ContactSVG from "@/UI/SVGs/Contact";
import HomeSVG from "@/UI/SVGs/Home";
import ResumeSVG from "@/UI/SVGs/Resume";
import classes from "./Navbar.module.css";
import NavLinkWithHiglight from "./NavLink";

interface NavbarProps {
  props: { type: string };
  ref: LegacyRef<HTMLElement> | undefined;
}

const NavbarItems = [
  {
    title: "Home",
    path: "/",
    svg: <HomeSVG />,
  },
  { title: "About", path: "/about", svg: <AboutSVG /> },
  { title: "Resume", path: "/resume", svg: <ResumeSVG /> },
  { title: "Contact", path: "/contacts", svg: <ContactSVG /> },
];

const Navbar = (props: NavbarProps["props"], ref: NavbarProps["ref"]) => {
  const path = usePathname();
  return (
    <nav className={classes[`${props.type}-nav`]} ref={ref}>
      <ul className={classes[`${props.type}-nav__items`]}>
        {NavbarItems.map((item) => (
          <li key={item.path} className={classes[`${props.type}-nav__item`]}>
            <NavLinkWithHiglight activeClass={classes.active} href={item.path}>
              <span className={classes["svg-span"]}>{item.svg}</span>
              {item.title}
            </NavLinkWithHiglight>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default forwardRef(Navbar);
