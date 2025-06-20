import { render, screen } from "@testing-library/react";
import PBM from "./PBM";

it("should to render 'Benefício de Laboratório' text", () => {
  render(<PBM />);
  const h1Element = screen.getByText("Benefício de Laboratório");
  expect(h1Element).toBeInTheDocument();
});
