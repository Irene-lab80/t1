import { Link } from "react-router-dom";
import { NavList } from "../../NavList";
import { CartCounter } from "../../CartCounter";
import { ROUTES } from "@/app/router/routes";
import { MobileNav } from "@/components";
import "react-loading-skeleton/dist/skeleton.css";

import style from "./Header.module.css";

export const Header = ({
  count,
  path,
  userName,
}: {
  path: string;
  count: number | undefined;
  userName: string | null;
}): JSX.Element => (
  <div className={style.wrapper}>
    <header className={style.header}>
      <div className={`${style.inner} ${path === "/" ? style.innerMain : ""}`}>
        <Link className={style.logoLink} to={ROUTES.HOME}>
          <h1 className={style.logo}>Goods4you</h1>
        </Link>
        <div className={style.mobileNav}>
          <MobileNav cart_items_count={count} />
        </div>

        <div className={style.desktopNav}>
          <NavList>
            <NavList.Item link={ROUTES.CATALOG}>Catalog</NavList.Item>
            <NavList.Item link={ROUTES.FAQ}>FAQ</NavList.Item>
            <NavList.Item link={ROUTES.CART}>
              <CartCounter count={count} />
            </NavList.Item>
            <NavList.Item>
              {/* {isLoading ? (
                <Skeleton className={style.skeleton} />
              ) : ( */}
              <span className={style.userName}>{userName}</span>
              {/* )} */}
            </NavList.Item>
          </NavList>
        </div>
      </div>
    </header>
  </div>
);
