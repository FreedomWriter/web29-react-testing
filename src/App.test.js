import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders header", () => {
  // const result = render(<App />);
  // console.log(result);
  // console.log(result.debug());
  const { getByText } = render(<App />);
  const linkElement = getByText(/add new animal/i);
  expect(linkElement).toBeInTheDocument();
});
