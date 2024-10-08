import { Button } from "@/components";

import style from "./Price.module.css";
import { Counter } from "../../Counter";
import { toast } from "react-toastify";

export const Price = ({
  oldPrice,
  newPrice,
  discount,
  inCartCount,
  handleUpdateCart,
  id,
  available_count,
}: {
  oldPrice: number;
  newPrice: number;
  discount: number;
  inCartCount: number;
  id: number;
  handleUpdateCart: (id: number, q: number) => void;
  available_count: number;
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
        <Counter
          count={inCartCount}
          onAdd={() => {
            if (available_count === inCartCount) {
              toast.error("No more product left");
            } else {
              handleUpdateCart(id, inCartCount + 1);
            }
          }}
          onRemove={() => handleUpdateCart(id, inCartCount - 1)}
        />
      ) : (
        <Button onClick={() => handleUpdateCart(id, inCartCount + 1)}>
          Add to cart
        </Button>
      )}
    </div>
  </div>
);
