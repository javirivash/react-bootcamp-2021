import React from "react";
import { render, screen } from "@testing-library/react";
import Header from ".";

const handleSearch = jest.fn();

describe("Header", () => {
  test("menu button is in the document", () => {
    render(<Header handleSearch={handleSearch} />);
    expect(screen.getByRole("button", { name: "menu" })).toBeInTheDocument();
  });

  test("search input is in the document", () => {
    render(<Header handleSearch={handleSearch} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  test("Log in button is in the document", () => {
    render(<Header handleSearch={handleSearch} />);
    expect(screen.getByRole("button", { name: "Log in" })).toBeInTheDocument();
  });

  test("theme toggle is in the document", () => {
    render(<Header handleSearch={handleSearch} />);
    expect(
      screen.getByRole("button", { name: "dark_mode" })
    ).toBeInTheDocument();
  });
});
