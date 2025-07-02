import { render, screen } from "@testing-library/react";
import SecurityNumberRegitered from ".";

describe("[ Component ] Security Number regitered", () => {
  it("should render component correctly", () => {
    render(<SecurityNumberRegitered />);

    expect(screen.getByTestId("test_id_registered")).toBeInTheDocument();
  });
});
