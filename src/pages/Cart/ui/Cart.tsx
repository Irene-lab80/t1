import { Loader, NoItems, Title } from "@/components";
import { CartInfo, CartProducts } from "../CartComponents";
import { Helmet } from "react-helmet-async";
import { useAppDispatch, useAppSelector } from "@/app/store/store";
import { updateCart } from "@/app/store/cart/cart";

import style from "./Cart.module.css";
import { useState } from "react";
import { getNewProducts } from "@/utils/helpers";

export type IProducts = {
  id: number;
  quantity: number;
}[];

export const Cart = (): JSX.Element => {
  const [currrentId, setCurrentId] = useState<number | null>(null);

  const { cart, status } = useAppSelector((state) => state.cartReducer);
  const dispatch = useAppDispatch();

  const handleUpdateCart = (id: number, q: number) => {
    setCurrentId(id);

    if (cart?.id) {
      dispatch(
        updateCart({
          cart_id: cart?.id,
          payload: {
            merge: false,
            products: getNewProducts(cart, id, q),
          },
        })
      );
    }
  };
  console.log(cart && !Object.keys(cart).length);
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
            <CartProducts
              products={cart.products}
              handleUpdateCart={handleUpdateCart}
              isLoading={status === "loading"}
              currrentId={currrentId}
            />
            <CartInfo
              count={cart.totalProducts}
              no_discount_price={cart.total}
              discounted_price={cart.discountedTotal}
            />
          </div>
        )}
        {cart && !Object.keys(cart).length && <NoItems>No items</NoItems>}
      </section>
    </main>
  );
};
