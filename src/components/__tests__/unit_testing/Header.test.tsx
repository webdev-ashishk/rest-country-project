import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "../../Header";

test("should first", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const heading = screen.getByText("Header.tsx rendered!");
  expect(heading).toBeInTheDocument();
});
