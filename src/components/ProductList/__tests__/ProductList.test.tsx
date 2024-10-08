import { render, screen } from "@testing-library/react";
import { ProductList } from "../ui/ProductList";
import { MemoryRouter } from "react-router-dom";
import { mock_products } from "@/mock/mock_faq";

describe("Product List Component", () => {
  it("should render product list", () => {
    render(
      <MemoryRouter>
        <ProductList
          handleUpdateCart={() => null}
          products={mock_products}
          getProductCount={() => 1}
        />
      </MemoryRouter>
    );

    const cardTitle = screen.queryByText(mock_products[0].title);
    expect(cardTitle).toBeInTheDocument();

    const notFoundElement = screen.queryByText("Not found");
    expect(notFoundElement).not.toBeInTheDocument();
  });

  it("should render empty product list", () => {
    render(
      <ProductList
        handleUpdateCart={() => null}
        products={[]}
        getProductCount={() => 1}
      />
    );
    const notFoundElement = screen.getByText("Not found");
    expect(notFoundElement).toBeInTheDocument();
  });
});
