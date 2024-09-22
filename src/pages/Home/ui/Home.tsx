import { Helmet } from "react-helmet-async";
import { Loader } from "@/components";
import { ChangeEvent, useState } from "react";
import { useGetProductsQuery } from "@/app/store/products/products";

import useDebounce from "@/hooks/useDebounce";

import { mock_faq } from "@/mock/mock_faq";
import { Catalog, Faq, Hero } from "../HomeComponents";

import style from "./Home.module.css";

export const Home = (): JSX.Element => {
  const [skip, setSkip] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const debouncedSearchTerm = useDebounce(inputValue, 500);

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
      {(isLoading || isFetching) && <Loader />}
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
      />
      <Faq mock_faq={mock_faq} />
    </main>
  );
};
