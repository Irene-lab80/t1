import { CartProductCard } from "../../CartProductCard";
import { Product } from "@/app/store/cart/types";

import style from "./CartProducts.module.css";

interface IProps {
  products: Product[];
  handleUpdateCart: (id: number, q: number) => void;
  isLoading: boolean;
  currrentId: number | null;
}

export const CartProducts = ({
  products,
  handleUpdateCart,
  isLoading,
  currrentId,
}: IProps) => (
  <div className={style.wrapper}>
    {products.map((product) => (
      <CartProductCard
        key={product.id}
        product={product}
        handleUpdateCart={handleUpdateCart}
        isLoading={isLoading}
        currrentId={currrentId}
      />
    ))}
  </div>
);
