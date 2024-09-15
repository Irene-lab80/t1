import { Title } from "../../../components";
import { CartInfo, CartProducts } from "../CartComponents";
import { mock_cart_data } from "./data";

import style from "./Cart.module.css";

export const Cart = (): JSX.Element => {
  const { products, total_count, no_discount_price, total_price } =
    mock_cart_data;

  return (
    <main className={style.main}>
      <section className={style.content}>
        <Title>My cart</Title>
        <div className={style.info}>
          <CartProducts products={products} />
          <CartInfo
            count={total_count}
            no_discount_price={no_discount_price}
            price={total_price}
          />
        </div>
      </section>
    </main>
  );
};
