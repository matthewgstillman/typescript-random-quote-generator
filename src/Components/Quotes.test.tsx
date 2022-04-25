import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Quotes from "./Quotes";

test("If Quotes have rendered", () => {
  render(<Quotes />);
  const randomQuoteElement = screen.getByTestId("randomQuote");
  expect(randomQuoteElement).toBeInTheDocument();
});
