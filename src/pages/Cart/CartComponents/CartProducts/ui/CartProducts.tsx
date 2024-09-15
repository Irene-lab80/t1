import { CartCounter } from "../../../../../components";
import { Counter } from "../../../../../components/Counter";
import { ICartProduct } from "../../../../../utils/types";
import { CartProductCard } from "../../CartProductCard";

import style from "./CartProducts.module.css";

interface IProps {
  products: ICartProduct[];
}

export const CartProducts = ({ products }: IProps) => {
  return (
    <div className={style.wrapper}>
      {products.map((product) => (
        <CartProductCard product={product} />
      ))}
    </div>
  );
};
