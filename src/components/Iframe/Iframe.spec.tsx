import { render, screen } from "@testing-library/react";
import Iframe from ".";
import React from "react";

const initState = true;
const setState = jest.fn();
const MOCK_TITLE = "Google home as example";
const MOCK_URL = "https://www.google.com/";

describe("[ Component ] Iframe", () => {
  it("should render iframe correctly", () => {
    jest
      .spyOn(React, "useState")
      .mockImplementationOnce(() => [initState, setState]);

    render(
      <Iframe
        openModal={initState}
        setOpenModal={setState}
        title={MOCK_TITLE}
        url={MOCK_URL}
      />
    );

    const iframe = screen.getByTestId("test_id_iframe");
    expect(iframe).toHaveClass("opacity-100");
  });
});
