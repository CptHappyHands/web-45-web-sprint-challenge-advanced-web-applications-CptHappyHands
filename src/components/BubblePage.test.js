import React from "react";
import MutationObserver from "mutationobserver-shim";

import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

test("Renders without errors", () => {
  render(<BubblePage />);
});

test("Renders appropriate number of colors passed in through mock", async () => {
  //Keep in mind that our service is called on mount for this component.
  render(<BubblePage />);
  const testColors = await screen.queryAllByTestId("test-colors");
  expect(testColors).toHaveLength(11);
});
