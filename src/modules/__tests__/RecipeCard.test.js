import React from "react";
import { render, screen } from "@testing-library/react";
import RecipeCard from "../RecipeCard";

const mockData = {
  id: "5f4d4a7e62fb0224951e7ec4",
  name: "Chicken Sausage & Spinach Ravioli",
  slug: "chicken-sausage-spinach-ravioli",
  headline: "with Tomato & Lemon",
  image:
    "https://img.hellofresh.com/c_fill,f_auto,fl_lossy,h_405,q_auto,w_720/hellofresh_s3/image/5f4d4a7e62fb0224951e7ec4-2fe03fc2.jpg",
  selected: 1,
  selectionLimit: 1,
  extraCharge: 0,
  yields: 2,
};

test("renders", () => {
  render(<RecipeCard />);
  expect(screen.getByTestId("image-section")).toBeInTheDocument();
  expect(screen.getByTestId("heading")).toBeInTheDocument();
  expect(screen.getByTestId("subheading")).toBeInTheDocument();
  expect(screen.getByTestId("footer")).toBeInTheDocument();
});

test("renders content when props passed", () => {
  render(<RecipeCard {...mockData} />);
  expect(screen.getByRole("img").getAttribute("src")).toBe(mockData.image);
  expect(screen.getByTestId("heading").textContent).toBe(mockData.name);
  expect(screen.getByTestId("subheading").textContent).toBe(mockData.headline);
  expect(screen.getByTestId("footer").textContent).toBe("Add");
});
