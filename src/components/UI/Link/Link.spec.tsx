import { render, screen } from "@testing-library/react";
import Link from ".";
import { getParams } from "../../../utils/getParams";

const MOCK_CHILDREN = <span>Click here!</span>;
const MOCK_LINK = {
  pathname: "www.localhost.com.br",
  param: {
    port: "8080",
  },
};

describe("[ UI ] Link", () => {
  it("should render chidlren and set simple href attribute", () => {
    render(<Link href={MOCK_LINK.pathname}>{MOCK_CHILDREN}</Link>);

    expect(screen.getByText("Click here!")).toBeInTheDocument();

    const link = screen.getByTestId("test_id_link");
    expect(link).toHaveAttribute("href", MOCK_LINK.pathname);
  });

  it("should set target attribute with _blank value", () => {
    render(<Link href={MOCK_LINK.pathname}>{MOCK_CHILDREN}</Link>);

    const link = screen.getByTestId("test_id_link");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("should set pathname + param in href attribute", () => {
    render(
      <Link
        href={{
          pathname: MOCK_LINK.pathname,
          param: MOCK_LINK.param,
        }}
      >
        {MOCK_CHILDREN}
      </Link>
    );

    const link = screen.getByTestId("test_id_link");
    expect(link).toHaveAttribute(
      "href",
      MOCK_LINK.pathname + getParams(MOCK_LINK.param)
    );
  });

  it("should set more than one param in href attribute", () => {
    const MOCK_PARAMS = {
      query: "search_about_something",
      filter: "technology",
    };
    render(
      <Link
        href={{
          pathname: MOCK_LINK.pathname,
          param: MOCK_PARAMS,
        }}
      >
        {MOCK_CHILDREN}
      </Link>
    );

    const link = screen.getByTestId("test_id_link");
    expect(link).toHaveAttribute(
      "href",
      MOCK_LINK.pathname + getParams(MOCK_PARAMS)
    );
  });
});
