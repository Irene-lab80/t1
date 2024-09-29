import { Helmet } from "react-helmet-async";
import { Loader } from "@/components";
import { ChangeEvent, useState } from "react";
import { useGetProductsQuery } from "@/app/store/products/products";
import useDebounce from "@/hooks/useDebounce";
import { mock_faq } from "@/mock/mock_faq";
import { Catalog, Faq, Hero } from "../HomeComponents";

import { getNewProducts } from "@/utils/helpers";
import { updateCart } from "@/app/store/cart/cart";
import { useAppDispatch, useAppSelector } from "@/app/store/store";

import style from "./Home.module.css";
import { useGetProductCountInCart } from "@/hooks/useGetProductCountInCart";

export const Home = (): JSX.Element => {
  const [skip, setSkip] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const dispatch = useAppDispatch();
  const { cart, status } = useAppSelector((state) => state.cartReducer);

  const debouncedSearchTerm = useDebounce(inputValue, 500);
  const getProductCount = useGetProductCountInCart();

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

  const { data, isLoading, isFetching } = useGetProductsQuery({
    limit: 12,
    skip,
    q: debouncedSearchTerm,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSkip(0);
    setInputValue(e.target.value);
  };

  const showMoreHandler = () => setSkip((prev) => prev + 12);

  return (
    <main className={style.main}>
      {(isLoading || isFetching || status === "loading") && <Loader />}
      <Helmet>
        <title>Catalog | Goods4you</title>
        <meta
          name="description"
          content="Any products from famous brands with worldwide delivery"
        />
      </Helmet>
      <Hero />
      <Catalog
        data={data}
        handleInputChange={handleInputChange}
        inputValue={inputValue}
        showMoreHandler={showMoreHandler}
        handleUpdateCart={handleUpdateCart}
        getProductCount={getProductCount}
      />
      <Faq mock_faq={mock_faq} />
    </main>
  );
};
