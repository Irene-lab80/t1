import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../../Header";
import { Footer } from "../../Footer";

import { useAppSelector } from "@/app/store/store";

import style from "./Layout.module.css";

export const Layout = (): JSX.Element => {
  const { data } = useAppSelector((state) => state.cartReducer);
  const { firstName, lastName } = useAppSelector((state) => state.userReducer);

  const path = useLocation().pathname;

  const cart = data?.carts ? data?.carts[0] : null;
  const count = cart ? cart.totalProducts : 0;
  const userName = firstName && lastName ? `${firstName} ${lastName}` : "";

  return (
    <div className={style.layout}>
      <Header path={path} count={count} userName={userName} />
      <div className={style.outlet}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
