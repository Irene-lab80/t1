import { Helmet } from "react-helmet-async";
import { Gallery, Info } from "../ProductComponents";

import { useGetProductByIdQuery } from "@/app/store/products/products";
import { Loader } from "@/components";
import { useParams } from "react-router-dom";
import { skipToken } from "@reduxjs/toolkit/query";

import { calculateDiscountedPrice } from "@/utils/helpers";

import style from "./Product.module.css";
import { useGetProductCountInCart } from "@/hooks/useGetProductCountInCart";

export const Product = (): JSX.Element => {
  const { id } = useParams();
  const getProductCount = useGetProductCountInCart();

  const {
    data: product,
    isLoading,
    isFetching,
  } = useGetProductByIdQuery(id ? +id : skipToken);

  const inCartCount = id ? getProductCount(+id) : 0;
  console.log(inCartCount);
  return (
    <main className={style.main}>
      {(isLoading || isFetching) && <Loader />}
      <Helmet>
        <title>Essence Mascara Lash Princess | Goods4you</title>
        <meta
          name="description"
          content="Any products from famous brands with worldwide delivery"
        />
      </Helmet>
      {product && (
        <section className={style.content}>
          <Gallery images={product.images} name={product.title} />
          <Info
            name={product.title}
            available_count={product.stock}
            description={product.description}
            discount={product.discountPercentage}
            old_price={product.price}
            price={calculateDiscountedPrice(
              product.price,
              product.discountPercentage
            )}
            rating={Math.round(product.rating)}
            ships_in={product.shippingInformation}
            tags={product.tags.map((tag, i) => ({ id: i + 1, name: tag }))}
            warranty_duration={product.warrantyInformation}
            inCartCount={inCartCount}
          />
        </section>
      )}
    </main>
  );
};
