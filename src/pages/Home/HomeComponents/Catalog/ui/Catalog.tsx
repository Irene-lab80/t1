import { Button, ProductList, SearchInput } from "@/components";
import { IResponseProducts } from "@/app/store/products/types";
import { ChangeEvent } from "react";

import style from "./Catalog.module.css";

interface IProps {
  data: IResponseProducts | undefined;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
  showMoreHandler: () => void;
}

export const Catalog = ({
  data,
  handleInputChange,
  inputValue,
  showMoreHandler,
}: IProps) => (
  <section className={style.content}>
    <h3 className={style.title} id="catalog">
      Catalog
    </h3>
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
);
