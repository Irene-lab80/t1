import { Helmet } from "react-helmet-async";
import {
  Button,
  FrequentlyAskedQuestion,
  Loader,
  ProductList,
  SearchInput,
} from "@/components";
import { mock_faq } from "./data";
import { useState } from "react";

import style from "./Home.module.css";
import { useGetProductsQuery } from "@/app/store/products/products";

export const Home = (): JSX.Element => {
  const [skip, setSkip] = useState(0);

  const { data, isLoading, isFetching } = useGetProductsQuery({
    limit: 12,
    skip,
  });

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
