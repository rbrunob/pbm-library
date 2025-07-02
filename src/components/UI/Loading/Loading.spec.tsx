import { render, screen } from "@testing-library/react";
import Loading from ".";

describe("[ UI ] Loading", () => {
  it("should render loading component", () => {
    render(<Loading />);

    expect(
      screen.getByText("Um momento... estamos verificando seus dados.")
    ).toBeInTheDocument();
  });

  it("should apply spin animation class", () => {
    render(<Loading />);

    const loading = screen.getByTestId("test_id_spin");
    expect(loading).toHaveClass("animate-spin");
  });
});
