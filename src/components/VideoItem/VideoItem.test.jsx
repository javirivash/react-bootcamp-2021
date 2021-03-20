import { render, screen } from "@testing-library/react";
import React from "react";
import VideoItem from ".";
import snippet from "./snippet.json";

describe("VideoItem", () => {
  test("thumbnail is in the document", () => {
    render(<VideoItem snippet={snippet} />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  test("video details are in the document", () => {
    render(<VideoItem snippet={snippet} />);
    expect(screen.getByRole("article")).toBeInTheDocument();
  });
});
