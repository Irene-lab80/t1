import { Product } from "@/app/store/products/types";
import { ProductCard } from "../../ProductCard";

import style from "./ProductList.module.css";
import { calculateDiscountedPrice } from "@/utils/helpers";
import { useGetProductCountInCart } from "@/hooks/useGetProductCountInCart";

interface IProps {
  products: Product[];
}

export const ProductList = ({ products }: IProps) => {
  const getProductCount = useGetProductCountInCart();

  return (
    <>
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
            initialCount={getProductCount(product.id)}
          />
        ))}
      </div>
      {!products?.length && <div className={style.notFound}>Not found</div>}
    </>
  );
};
