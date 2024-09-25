import { NavList, CartCounter } from "@/components";
import { useEffect, useRef, useState } from "react";
import { BurgerMenuIcon } from "@/shared/icons";
import { ROUTES } from "@/app/router/routes";

import style from "./MobileNav.module.css";

export const MobileNav = ({
  cart_items_count,
}: {
  cart_items_count: number | undefined;
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref?.current?.contains(e.target as HTMLElement)) {
        setMenuOpen(false);
      }
    }

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div>
      <button
        aria-label="menu"
        className={`${style.burgerMenu}`}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <BurgerMenuIcon />
      </button>

      <div
        ref={ref}
        className={`${style.nav} ${menuOpen ? style.navOpen : ""}`}
      >
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
  );
};
