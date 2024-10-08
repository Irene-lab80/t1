import { Outlet } from "react-router-dom";
import { Header } from "../../Header";
import { Footer } from "../../Footer";

import style from "./Layout.module.css";

export const Layout = (): JSX.Element => {
  return (
    <div className={style.layout}>
      <Header />
      <div className={style.outlet}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
