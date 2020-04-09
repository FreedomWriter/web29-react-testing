import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AnimalForm from "./AnimalForm";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";

test("Current Animals test Species is visible", () => {
  const { getByText } = render(<AnimalForm />);
  const header = getByText(/current animals test species/i);
  expect(header).toBeVisible();
});

test("inputs are visible", () => {
  const { getByLabelText } = render(<AnimalForm />);

  const speciesLabelText = getByLabelText(/species/i);
  const ageLabelText = getByLabelText(/age/i);
  const notesLabelText = getByLabelText(/notes/i);

  expect(speciesLabelText).toBeVisible();
  expect(ageLabelText).toBeVisible();
  expect(notesLabelText).toBeVisible();
});

test("form submit adds new animals to the list", () => {
  const { getByLabelText, getByText, getByTestId } = render(<AnimalForm />);

  const speciesLabelText = getByLabelText(/species/i);
  const ageLabelText = getByLabelText(/age/i);
  const notesLabelText = getByLabelText(/notes/i);

  fireEvent.change(speciesLabelText, { target: { value: "hippo" } });
  fireEvent.change(ageLabelText, { target: { value: 32 } });
  fireEvent.change(notesLabelText, {
    target: { value: "gee, this is an old hippo" },
  });
  fireEvent.click(getByText(/submit/i));

  const animalText = getByTestId("hippo");
  expect(animalText).toBeInTheDocument();
});
