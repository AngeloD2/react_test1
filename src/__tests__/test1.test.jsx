/**
 * @jest-environment jsdom
 */

// eslint-disable-next-line no-unused-vars
import React from "react";

import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import Test1 from "../components/Test1";

test("Test 1, State Variables", () => {
  const { getByText } = render(<Test1 />);

  // Check initial color
  expect(getByText("blue")).toBeInTheDocument();

  // Click the button
  fireEvent.click(getByText("Toggle"));

  // Check if the color has changed
  expect(getByText("red")).toBeInTheDocument();
});
