import { render, screen } from "@testing-library/react";
import Header from ".";

const MOCK_ORIGINAL_PRODUCT_PRICE = 100;

describe("[ Component ] Header", () => {
  it("Should render Header with correct original product price", () => {
    render(<Header originalProductPrice={MOCK_ORIGINAL_PRODUCT_PRICE} />);

    const headerPrice = screen.getByTestId("test_id_header_price");
    expect(headerPrice).toBeInTheDocument();
    expect(headerPrice).toHaveTextContent("R$ 100,00");
  });
});
