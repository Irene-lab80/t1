import { Button } from "@/components";

import style from "./Price.module.css";

export const Price = ({
  oldPrice,
  newPrice,
  discount,
}: {
  oldPrice: number;
  newPrice: number;
  discount: number;
}) => (
  <div className={style.wrapper}>
    <div className={style.price}>
      <div>
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
      <Button>Add to cart</Button>
    </div>
  </div>
);
