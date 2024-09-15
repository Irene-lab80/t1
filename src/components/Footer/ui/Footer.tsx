import { Link } from "react-router-dom";
import style from "./Footer.module.css";
import { NavList } from "../../NavList";
import { ROUTES } from "@/app/routes";

export const Footer = (): JSX.Element => {
  return (
    <footer className={style.footer}>
      <div className={style.inner}>
        <Link className={style.logoLink} to={ROUTES.HOME}>
          <div className={style.logo}>Goods4you</div>
        </Link>
        <NavList>
          <NavList.Item link={ROUTES.HOME}>Catalog</NavList.Item>
          <NavList.Item link={ROUTES.FAQ}>FAQ</NavList.Item>
        </NavList>
      </div>
    </footer>
  );
};
