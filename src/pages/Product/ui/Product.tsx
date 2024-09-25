import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { skipToken } from "@reduxjs/toolkit/query";
import { ROUTES } from "@/app/router/routes";
import { Helmet } from "react-helmet-async";
import { Gallery, Info } from "../ProductComponents";
import { useGetProductByIdQuery } from "@/app/store/products/products";
import { Loader } from "@/components";
import { calculateDiscountedPrice } from "@/utils/helpers";
import { useGetProductCountInCart } from "@/hooks/useGetProductCountInCart";

import style from "./Product.module.css";

export const Product = (): JSX.Element => {
  const { id } = useParams();
  const navigate = useNavigate();

  const getProductCount = useGetProductCountInCart();

  const {
    data: product,
    isLoading,
    isFetching,
    error,
  } = useGetProductByIdQuery(id ? +id : skipToken);

  useEffect(() => {
    if (error && "status" in error && error.status === 404) {
      navigate(`${ROUTES.ERROR}`);
    }
  }, [error, navigate]);

  const inCartCount = id ? getProductCount(+id) : 0;

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
