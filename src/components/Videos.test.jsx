import React from "react";
import { render, screen } from "@testing-library/react";
import Videos from "./Videos";
import data from "../mock/youtube-videos-mock.json";

describe("Videos", () => {
  test("array with at least one video item is in the document", () => {
    render(<Videos data={data} />);
    const isArrayOfVideoItems = Array.isArray(screen.queryAllByRole("article"));
    const isNotEmpty = screen.queryAllByRole("article").length > 0;
    expect(isArrayOfVideoItems && isNotEmpty).toBe(true);
  });
});
