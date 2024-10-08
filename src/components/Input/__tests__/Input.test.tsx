import { render, screen } from "@testing-library/react";
import { Input } from "../ui/Input";

describe("Input Component", () => {
  it("should render input", () => {
    render(<Input />);
    const buttonElement = screen.getByTestId("input");
    expect(buttonElement).toBeInTheDocument();
  });

  it("should render input with correct value", () => {
    render(<Input value={"test"} />);
    expect(screen.getByDisplayValue('test')).toBeInTheDocument();
  });
});
