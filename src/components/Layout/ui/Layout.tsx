import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../../Header";
import { Footer } from "../../Footer";

import style from "./Layout.module.css";
import { useAppSelector } from "@/app/store/store";

export const Layout = (): JSX.Element => {
  const { data } = useAppSelector((state) => state.cartReducer);

  const path = useLocation().pathname;

  const cart = data?.carts[0];
  const count = cart ? cart.totalProducts : 0;

  return (
    <div className={style.layout}>
      <Header count={count} path={path} />
      <div className={style.outlet}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
