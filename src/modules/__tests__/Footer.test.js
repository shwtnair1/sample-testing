import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

test("renders a button", () => {
  render(<Footer />);
  expect(screen.getByRole("button")).toBeInTheDocument();
});
