import { render, screen } from "@testing-library/react";
import React from "react";
import VideoDetails from "./VideoDetails";
import snippet from "../snippet-mock.json";

describe("VideoDetails", () => {
  test("video title is in the document", () => {
    render(<VideoDetails snippet={snippet} />);
    expect(
      screen.getByRole("heading", { name: "Wizeline", exact: false })
    ).toBeInTheDocument();
  });

  test("video channel is in the document", () => {
    render(<VideoDetails snippet={snippet} />);
    expect(
      screen.getByRole("heading", { name: "Wizeline", exact: false })
    ).toBeInTheDocument();
  });

  test("video description is in the document", () => {
    render(<VideoDetails snippet={snippet} />);
    expect(screen.getByRole("paragraph")).toBeInTheDocument();
  });
});
