import { Link } from "react-router-dom";
import style from "./NavList.module.css";

interface IProps {
  children: React.ReactNode;
}

export const NavList = ({ children }: IProps): JSX.Element => {
  return (
    <nav>
      <ul className={style.navList}>{children}</ul>
    </nav>
  );
};

interface IPropsItem {
  children: React.ReactNode;
  link: string;
}

export const NavItem = ({ children, link }: IPropsItem): JSX.Element => {
  return (
    <li className={style.navItem}>
      <Link className={style.link} to={link}>
        {children}
      </Link>
    </li>
  );
};

NavList.Item = NavItem;
