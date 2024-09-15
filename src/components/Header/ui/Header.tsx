import { Link, useLocation } from "react-router-dom";
import { NavList } from "../../NavList";
import { CartCounter } from "../../CartCounter";
import { Button } from "../../Button";
import { ROUTES } from "@/app/routes";

import style from "./Header.module.css";
import { BurgerMenuIcon } from "@/shared/icons";
import { useState } from "react";
import { MobileNav } from "@/components/MobileNav";

export const Header = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation().pathname;
  const cart_items_count = 999;

  return (
    <div className={style.wrapper}>
      <header className={style.header}>
        <div className={style.inner}>
          <Link className={style.logoLink} to={ROUTES.HOME}>
            <h1 className={style.logo}>Goods4you</h1>
          </Link>
          <div className={style.mobileNav}>
            <MobileNav cart_items_count={cart_items_count} />
          </div>

          <div className={style.desktopNav}>
            <NavList>
              <NavList.Item link={ROUTES.CATALOG}>Catalog</NavList.Item>
              <NavList.Item link={ROUTES.FAQ}>FAQ</NavList.Item>
              <NavList.Item link={ROUTES.CART}>
                <CartCounter count={cart_items_count} />
              </NavList.Item>
              <NavList.Item>Johnson Smith</NavList.Item>
            </NavList>
          </div>
        </div>
      </header>
      {location === "/" && (
        <div className={style.hero}>
          <p className={style.heroText}>
            We sell smartphones, laptops, clothes, shoes and many other products
            at low prices
          </p>
          <div className={style.heroButton}>
            <Button link="#catalog" type="button">
              Go to shopping
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
