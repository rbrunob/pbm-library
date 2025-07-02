import { render, screen } from "@testing-library/react";
import Text from ".";

const MOCK_LABEL = "a example text";

describe("[ UI ] Text", () => {
  it("should render children", () => {
    render(<Text>{MOCK_LABEL}</Text>);
    expect(screen.getByText(MOCK_LABEL)).toBeInTheDocument();
  });

  it("should apply the correct classnames", () => {
    render(<Text>{MOCK_LABEL}</Text>);

    const text = screen.getByTestId("test_id_text");
    expect(text).toHaveClass(
      "text-start",
      "font-normal",
      "text-sm",
      "text-zinc-900"
    );
  });
});
