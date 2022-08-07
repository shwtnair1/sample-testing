import { render, screen } from "@testing-library/react";
import App from "./App";
import React from "react";
import "@testing-library/user-event";

test("renders", () => {
  const { container } = render(<App />);
  expect(container.getElementsByTagName("RecipesList")).toBeDefined();
});
