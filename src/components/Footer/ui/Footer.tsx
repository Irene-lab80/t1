import { Link } from "react-router-dom";
import { NavList } from "../../NavList";

import style from "./Footer.module.css";
import { ROUTES } from "@/app/router/routes";

export const Footer = (): JSX.Element => {
  return (
    <footer className={style.footer}>
      <div className={style.inner}>
        <Link className={style.logoLink} to={ROUTES.HOME}>
          <div className={style.logo}>Goods4you</div>
        </Link>
        <NavList className={style.nav}>
          <NavList.Item link={ROUTES.CATALOG}>Catalog</NavList.Item>
          <NavList.Item link={ROUTES.FAQ}>FAQ</NavList.Item>
        </NavList>
      </div>
    </footer>
  );
};
