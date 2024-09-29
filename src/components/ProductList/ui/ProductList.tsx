import { Product } from "@/app/store/products/types";
import { ProductCard } from "../../ProductCard";

import { calculateDiscountedPrice } from "@/utils";
import { NoItems } from "@/components/NoItems";

import style from "./ProductList.module.css";

interface IProps {
  products: Product[];
  handleUpdateCart: (id: number, q: number) => void;
  getProductCount: (id: number) => number;
}

export const ProductList = ({
  products,
  handleUpdateCart,
  getProductCount,
}: IProps) => {
  return (
    <>
      <div className={style.productsList}>
        {products.map((product) => {
          return (
            <ProductCard
              image={product.thumbnail}
              name={product.title}
              price={calculateDiscountedPrice(
                product.price,
                product.discountPercentage
              )}
              key={product.id}
              id={product.id}
              initialCount={getProductCount(product.id)}
              handleUpdateCart={handleUpdateCart}
              available_count={product.stock}
            />
          );
        })}
      </div>
      {!products?.length && <NoItems>Not found</NoItems>}
    </>
  );
};
