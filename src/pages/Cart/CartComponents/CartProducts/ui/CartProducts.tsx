import { CartProductCard } from "../../CartProductCard";

import style from "./CartProducts.module.css";
import { Product } from "@/app/store/cart/types";

interface IProps {
  products: Product[];
}

export const CartProducts = ({ products }: IProps) => {
  return (
    <div className={style.wrapper}>
      {products.map((product) => (
        <CartProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
