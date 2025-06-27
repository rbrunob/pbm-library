import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./index";

const MOCK_LABEL = "Example Label";

describe("[ UI ] Button", () => {
  it("should to render children correctly", () => {
    render(<Button>{MOCK_LABEL}</Button>);

    expect(screen.getByText(MOCK_LABEL)).toBeInTheDocument();
  });

  it("should passes props to the button element", () => {
    render(
      <Button type="submit" data-testid="id_test_button">
        {MOCK_LABEL}
      </Button>
    );

    const btn = screen.getByTestId("id_test_button");
    expect(btn).toHaveAttribute("type", "submit");
  });

  it("should calls onClick handler when clicked", () => {
    const handleClick = jest.fn();

    render(<Button onClick={handleClick}>{MOCK_LABEL}</Button>);
    fireEvent.click(screen.getByText(MOCK_LABEL));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should applies the correct classnames", () => {
    render(<Button>{MOCK_LABEL}</Button>);
    const btn = screen.getByRole("button");

    expect(btn).toHaveClass(
      "w-3xs",
      "cursor-pointer",
      "h-10",
      "rounded-full",
      "bg-blue-500",
      "hover:bg-blue-400",
      "text-white",
      "text-sm",
      "font-semibold",
      "transition-colors"
    );
  });
});
