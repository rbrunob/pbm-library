import { render, screen } from "@testing-library/react";
import Text from ".";

const MOCK_LABEL = "a example title";

describe("[ UI ] Title", () => {
  it("should render children", () => {
    render(<Text>{MOCK_LABEL}</Text>);
    expect(screen.getByText(MOCK_LABEL)).toBeInTheDocument();
  });

  it("should apply the correct classnames", () => {
    render(<Text>{MOCK_LABEL}</Text>);

    const text = screen.getByTestId("test_id_title");
    expect(text).toHaveClass(
      "text-start",
      "font-semibold",
      "text-sm",
      "text-zinc-900"
    );
  });
});
