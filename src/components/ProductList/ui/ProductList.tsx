import { IProduct } from "../../../utils/types";
import { ProductCard } from "../../ProductCard";

import style from "./ProductList.module.css";

interface IProps {
  products: IProduct[];
}

export const ProductList = ({ products }: IProps) => {
  return (
    <div className={style.productsList}>
      {products.map((product) => (
        <ProductCard
          image={product.image}
          name={product.name}
          price={product.price}
          key={product.id}
        />
      ))}
    </div>
  );
};
