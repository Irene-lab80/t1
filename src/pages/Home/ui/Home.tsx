import { Helmet } from "react-helmet-async";
import {
  Button,
  FrequentlyAskedQuestion,
  Loader,
  ProductList,
  SearchInput,
} from "@/components";
import { ChangeEvent, useState } from "react";
import { useGetProductsQuery } from "@/app/store/products/products";

import useDebounce from "@/hooks/useDebounce";

import style from "./Home.module.css";
import { mock_faq } from "@/mock/mock_faq";

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
      <section className={style.content}>
        <h2 className={style.title} id="catalog">
          Catalog
        </h2>
        <div className={style.search}>
          <SearchInput
            type="search"
            name="search"
            id="search"
            placeholder="Search by title"
            onChange={handleInputChange}
            value={inputValue}
          />
        </div>
        {data && (
          <>
            <div className={style.products}>
              <ProductList products={data.products} />
            </div>
            <div className={style.buttonWrapper}>
              {data?.total !== data?.products.length && (
                <Button type="button" onClick={showMoreHandler}>
                  Show more
                </Button>
              )}
            </div>
          </>
        )}
      </section>
      <section className={style.faq} id="faq">
        <div className={style.faqInner}>
          <h2 className={style.title}>FAQ</h2>

          <div className={style.faqList}>
            {mock_faq.map((faq) => (
              <FrequentlyAskedQuestion
                answer={faq.answer}
                question={faq.question}
                isOpen={faq.id === 1 ? true : false}
                key={faq.id}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
