import { Button } from "@/components";

import style from "./Price.module.css";
import { Counter } from "../../Counter";

export const Price = ({
  oldPrice,
  newPrice,
  discount,
  inCartCount,
}: {
  oldPrice: number;
  newPrice: number;
  discount: number;
  inCartCount: number;
}) => (
  <div className={style.wrapper}>
    <div className={style.price}>
      <div className={style.pricesWrapper}>
        <div className={style.currentPrice}>${newPrice}</div>
        <div className={style.oldPrice}>${oldPrice}</div>
      </div>
      <div className={style.separator} />
      <div>
        <span>Your discount:</span>
        <span className={style.discount}>{discount}%</span>
      </div>
    </div>

    <div className={style.button}>
      {inCartCount > 0 ? (
        <Counter count={inCartCount} setCount={() => null} />
      ) : (
        <Button>Add to cart</Button>
      )}
    </div>
  </div>
);
