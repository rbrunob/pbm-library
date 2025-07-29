import { render, screen } from "@testing-library/react";
import Footer from ".";

describe("[ Component ] Footer", () => {
  it("Should render Partener logo in Footer", () => {
    const MOCK_INDUSTRY_LOGO = "https://example.com/logo.png";

    render(<Footer industryLogo={MOCK_INDUSTRY_LOGO} />);

    const footerLogo = screen.getByTestId("footer_industry_logo_pbm");
    expect(footerLogo).toBeInTheDocument();
    expect(footerLogo).toHaveAttribute("src", MOCK_INDUSTRY_LOGO);
  });
});
