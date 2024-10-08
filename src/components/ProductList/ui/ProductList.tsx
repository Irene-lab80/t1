import { Product } from "@/app/store/products/types";
import { ProductCard } from "../../ProductCard";

import { calculateDiscountedPrice } from "@/utils/helpers";
import { useGetProductCountInCart } from "@/hooks/useGetProductCountInCart";
import { NoItems } from "@/components/NoItems";

import style from "./ProductList.module.css";

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
      {!products?.length && <NoItems>Not found</NoItems>}
    </>
  );
};
