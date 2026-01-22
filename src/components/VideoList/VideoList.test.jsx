import React from "react";
import { render, screen } from "@testing-library/react";
import VideoList from ".";
import data from "../mock/youtube-videos-mock.json";

describe("VideoList", () => {
  test("array with at least one video item is in the document", () => {
    render(<VideoList data={data} />);
    const isArrayOfVideoItems = Array.isArray(screen.queryAllByRole("article"));
    const isNotEmpty = screen.queryAllByRole("article").length > 0;
    expect(isArrayOfVideoItems).toBe(true);
    expect(isNotEmpty).toBe(true);
  });
});
