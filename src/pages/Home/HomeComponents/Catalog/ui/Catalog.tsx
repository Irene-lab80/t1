import { Button, ProductList, Input } from "@/components";
import { IResponseProducts } from "@/app/store/products/types";
import { ChangeEvent } from "react";

import style from "./Catalog.module.css";

interface IProps {
  data: IResponseProducts | undefined;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
  showMoreHandler: () => void;
  handleUpdateCart: (id: number, q: number) => void;
  getProductCount: (id: number) => number;
}

export const Catalog = ({
  data,
  handleInputChange,
  inputValue,
  showMoreHandler,
  handleUpdateCart,
  getProductCount,
}: IProps) => (
  <section className={style.content}>
    <h3 className={style.title} id="catalog">
      Catalog
    </h3>
    <div className={style.search}>
      <Input
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
          <ProductList
            products={data.products}
            handleUpdateCart={handleUpdateCart}
            getProductCount={getProductCount}
          />
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
