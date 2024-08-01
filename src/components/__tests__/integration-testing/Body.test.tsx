import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import Body from "../../Body";
function handleBody() {
  render(<Body />);
  const heading = screen.getByTestId("bodyOfDiv");
  console.log(heading);
  expect(heading).toBeInTheDocument();
}
test("should body rendered with heading", handleBody);
