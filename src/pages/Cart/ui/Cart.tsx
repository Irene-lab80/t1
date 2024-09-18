import { Loader, Title } from "@/components";
import { CartInfo, CartProducts } from "../CartComponents";
import { Helmet } from "react-helmet-async";
import { useAppSelector } from "@/app/store/store";

import style from "./Cart.module.css";

export const Cart = (): JSX.Element => {
  const { data, status } = useAppSelector((state) => state.cartReducer);
  const cart = data?.carts[0];

  return (
    <main className={style.main}>
      {status === "loading" && <Loader />}
      <Helmet>
        <title>My cart | Goods4you</title>
        <meta
          name="description"
          content="Any products from famous brands with worldwide delivery"
        />
      </Helmet>
      <section className={style.content}>
        <Title>My cart</Title>
        {cart && (
          <div className={style.info}>
            <CartProducts products={cart.products} />
            <CartInfo
              count={cart?.totalProducts}
              no_discount_price={cart.total}
              discounted_price={cart.discountedTotal}
            />
          </div>
        )}
      </section>
    </main>
  );
};
