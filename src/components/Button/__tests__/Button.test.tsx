import { render, screen } from "@testing-library/react";
import { Button } from "../ui/Button";
import { CartIcon } from "@/shared/icons";

describe("Button Component", () => {
  it("should render default button with correct label", () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByTestId("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent("Click me");
  });

  it("should render icon variant button", () => {
    render(
      <Button variant="icon">
        <CartIcon />
      </Button>
    );
    const buttonElement = screen.getByTestId("button");
    expect(buttonElement).toBeInTheDocument();
  });

  it("should render link button with correct href and label", () => {
    render(<Button link="/test">Click me</Button>);
    const linkElement = screen.getByTestId("button");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent("Click me");
    expect(linkElement).toHaveAttribute("href", "/test");
  });
});
