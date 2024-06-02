import NavLink from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type NavLinkWithHiglightProps = {
  activeClass: string;
  children: ReactNode;
  href: string;
};

const NavLinkWithHiglight = ({
  activeClass,
  children,
  href,
}: NavLinkWithHiglightProps) => {
  const currentPath = usePathname();
  return (
    <NavLink
      className={href === currentPath ? activeClass : undefined}
      href={href}
    >
      {children}
    </NavLink>
  );
};

export default NavLinkWithHiglight;
