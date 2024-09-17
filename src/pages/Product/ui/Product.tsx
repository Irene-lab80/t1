import { Helmet } from "react-helmet-async";
import { Gallery, Info } from "../ProductComponents";

import { useGetProductByIdQuery } from "@/app/store/products/products";
import { Loader } from "@/components";
import { useParams } from "react-router-dom";
import { skipToken } from "@reduxjs/toolkit/query";

import style from "./Product.module.css";
import { calculateDiscountedPrice } from "@/utils/helpers";

export const Product = (): JSX.Element => {
  const { id } = useParams();

  const {
    data: product,
    isLoading,
    isFetching,
  } = useGetProductByIdQuery(id ? +id : skipToken);

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
          {/* TODO: переделать */}
          <Gallery
            image={product.images[0]}
            name={product.title}
            thumbnails={product.images.map((image, i) => ({
              id: i + 1,
              image: image,
              name: "",
            }))}
          />
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
          />
        </section>
      )}
    </main>
  );
};
