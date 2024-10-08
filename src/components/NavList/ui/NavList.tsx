import style from "./NavList.module.css";
import { HashLink as Link } from "react-router-hash-link";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export const NavList = ({ children, className }: IProps): JSX.Element => {
  return (
    <nav>
      <ul className={`${style.navList} ${className}`}>{children}</ul>
    </nav>
  );
};

interface IPropsItem {
  children: React.ReactNode;
  link?: string;
}

export const NavItem = ({ children, link }: IPropsItem): JSX.Element => {
  return (
    <li className={style.navItem}>
      {link ? (
        <Link id="nav-link" className={style.link} to={link}>
          {children}
        </Link>
      ) : (
        <span className={style.link}>{children}</span>
      )}
    </li>
  );
};

NavList.Item = NavItem;
