import { Button } from "../../../components/Button";
import { FrequentlyAskedQuestion } from "../../../components/FrequentlyAskedQuestion";
import { ProductList } from "../../../components/ProductList";
import { SearchInput } from "../../../components/SearchInput";
import { data, mock_faq } from "./data";

import style from "./Home.module.css";

export const Home = (): JSX.Element => {
  return (
    <main className={style.main}>
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
        <div className={style.products}>
          <ProductList products={data} />
        </div>
        <div className={style.buttonWrapper}>
          <Button type="button">Show more</Button>
        </div>
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
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
