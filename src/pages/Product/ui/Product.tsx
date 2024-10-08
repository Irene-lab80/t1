import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { skipToken } from "@reduxjs/toolkit/query";
import { ROUTES } from "@/app/router/routes";
import { Helmet } from "react-helmet-async";
import { Gallery, Info } from "../ProductComponents";
import { useGetProductByIdQuery } from "@/app/store/products/products";
import { Loader } from "@/components";
import { calculateDiscountedPrice } from "@/utils";
import { useGetProductCountInCart } from "@/hooks/useGetProductCountInCart";

import { useAppDispatch, useAppSelector } from "@/app/store/store";
import { updateCart } from "@/app/store/cart/cart";

import style from "./Product.module.css";
import { getNewProducts } from "@/utils/helpers";

export const Product = (): JSX.Element => {
  const { id } = useParams();
  const navigate = useNavigate();

  const getProductCount = useGetProductCountInCart();

  const inCartCount = id ? getProductCount(+id) : 0;

  const { cart, status } = useAppSelector((state) => state.cartReducer);
  const dispatch = useAppDispatch();

  const handleUpdateCart = (id: number, q: number) => {
    if (cart?.id) {
      dispatch(
        updateCart({
          cart_id: cart?.id,
          payload: {
            merge: false,
            products: getNewProducts(cart, id, q),
          },
        })
      );
    }
  };

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

  return (
    <main className={style.main}>
      {(isLoading || isFetching || status === "loading") && <Loader />}
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
            handleUpdateCart={handleUpdateCart}
            id={product.id}
          />
        </section>
      )}
    </main>
  );
};
