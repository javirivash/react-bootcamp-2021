import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("header is in the document", () => {
    render(<App />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  test("main title is in the document", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: /Welcome to YouTubit/i })
    ).toBeInTheDocument();
  });

  test("main content is in the document", () => {
    render(<App />);
    expect(screen.getByRole("main")).toBeInTheDocument();
  });
});
