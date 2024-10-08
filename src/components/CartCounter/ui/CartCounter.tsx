import { CartIcon } from "@/shared/icons";

import style from "./CartCounter.module.css";

interface IProps {
  count: number | undefined;
}

export const CartCounter = ({ count }: IProps) => {
  return (
    <div className={style.cart}>
      Cart
      <div className={style.cartIconWrapper}>
        <CartIcon />
        {count ? (
          <div className={style.countWrapper}>
            {count > 0 && (
              <div className={style.count}>{count < 99 ? count : "99+"}</div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};
