import { pluralize } from "@/utils";
import style from "./CartInfo.module.css";

interface IProps {
  count: number;
  discounted_price: number;
  no_discount_price: number;
}

export const CartInfo = ({
  count,
  discounted_price,
  no_discount_price,
}: IProps) => {
  return (
    <div className={style.checkoutInfo}>
      <div className={`${style.row} ${style.totalCountRow}`}>
        <div className={style.title}>Total count</div>
        <div className={style.value}>{pluralize(count, "item")}</div>
      </div>

      <div className={`${style.row} ${style.withoutDiscountRow}`}>
        <div className={style.title}>Price without discount</div>
        <div className={style.value}>${no_discount_price.toFixed(2)}</div>
      </div>

      <div className={style.separator} />

      <div className={`${style.row} ${style.totalPriceRow}`}>
        <div className={style.title}>Total price</div>
        <div className={style.value}>${discounted_price}</div>
      </div>
    </div>
  );
};
