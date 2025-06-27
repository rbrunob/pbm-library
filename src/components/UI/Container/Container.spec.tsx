import { render, screen } from "@testing-library/react";
import Container from "./index";

const MOCK_CHILDREN = <h1>Example Content</h1>;

describe("[ UI ] Container", () => {
  it("should render children and set the 'data-variant' attribute based on the variant prop", () => {
    render(<Container variant="simple">{MOCK_CHILDREN}</Container>);

    expect(screen.getByText("Example Content")).toBeInTheDocument();

    const container = screen.getByTestId("test_id_container");
    expect(container).toHaveAttribute("data-variant", "simple");
  });

  it("should apply the correct class names when variant is 'simple'", () => {
    render(<Container variant="simple">{MOCK_CHILDREN}</Container>);

    const container = screen.getByTestId("test_id_container");
    expect(container).toHaveClass("relative");
  });

  it("should apply the correct class names when variant is 'main'", () => {
    render(<Container variant="main">{MOCK_CHILDREN}</Container>);

    const container = screen.getByTestId("test_id_container");
    expect(container).toHaveClass("flex");
  });
});
