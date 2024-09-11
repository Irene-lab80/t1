import { useLocation } from "react-router-dom";
import { ROUTES } from "../../../utils";
import { NavList } from "../../NavList";
import style from "./Header.module.css";

export const Header = (): JSX.Element => {
  const location = useLocation().pathname;

  return (
    <div className={style.wrapper}>
      <header className={style.header}>
        <div className={style.inner}>
          <div>Goods4you</div>
          <NavList>
            <NavList.Item link={ROUTES.HOME}>Catalog</NavList.Item>
            <NavList.Item link={ROUTES.FAQ}>FAQ</NavList.Item>
            <NavList.Item link={ROUTES.CART}>Cart</NavList.Item>
            <NavList.Item link={ROUTES.PROFILE}>Johnson Smith</NavList.Item>
          </NavList>
        </div>
      </header>
      {location === "/" && (
        <div className={style.hero}>
          <p className={style.heroText}>
            We sell smartphones, laptops, clothes, shoes and many other products
            at low prices
          </p>
          <button className={style.heroButton} type="button">
            Go to shopping
          </button>
        </div>
      )}
    </div>
  );
};
