import { fireEvent, render, screen } from "@testing-library/react";
import SecurityNumberInvalid from ".";
import React from "react";

const setState = jest.fn();

describe("[ Component ] Security Number invalid", () => {
  it("should render component correctly", () => {
    render(<SecurityNumberInvalid />);

    expect(screen.getByTestId("test_id_invalid")).toBeInTheDocument();
  });

  it("should render the iframe close when the state is false", () => {
    jest
      .spyOn(React, "useState")
      .mockImplementationOnce(() => [false, setState]);

    render(<SecurityNumberInvalid />);

    const iframe = screen.getByTestId("test_id_iframe");
    expect(iframe).toHaveClass("opacity-0");
  });

  it("should render the iframe open when the state is true", () => {
    jest
      .spyOn(React, "useState")
      .mockImplementationOnce(() => [true, setState]);

    render(<SecurityNumberInvalid />);

    const iframe = screen.getByTestId("test_id_iframe");
    expect(iframe).toHaveClass("opacity-100");
  });

  it("should render the iframe open when the button is clicked to set a new state", () => {
    render(<SecurityNumberInvalid />);

    const button = screen.getByTestId("test_id_openiframe");
    fireEvent.click(button);

    const iframe = screen.getByTestId("test_id_iframe");
    expect(iframe).toHaveClass("opacity-100");
  });
});
