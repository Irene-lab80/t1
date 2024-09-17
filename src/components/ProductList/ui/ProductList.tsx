import { Product } from "@/app/store/products/types";
import { ProductCard } from "../../ProductCard";

import style from "./ProductList.module.css";
import { calculateDiscountedPrice } from "@/utils/helpers";

interface IProps {
  products: Product[];
}

export const ProductList = ({ products }: IProps) => (
  <div className={style.productsList}>
    {products.map((product) => (
      <ProductCard
        image={product.thumbnail}
        name={product.title}
        price={calculateDiscountedPrice(
          product.price,
          product.discountPercentage
        )}
        key={product.id}
        id={product.id}
        initialCount={0}
      />
    ))}
  </div>
);
