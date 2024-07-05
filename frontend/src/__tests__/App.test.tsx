import React from "react";
import "@testing-library/jest-dom/jest-globals";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { expect, test } from "vitest";

test("renders the text area", () => {
  render(<App />);
  const textarea = screen.getByPlaceholderText("Type your Markdown here...");
  expect(textarea).toBeInTheDocument();
});

test("renders the preview area", () => {
  render(<App />);
  const preview = screen.getByRole("document");
  expect(preview).toBeInTheDocument();
});
