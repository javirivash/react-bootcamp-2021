import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

// import useAppContext from "./context/AppState";
// jest.mock("./context/AppState");
// useAppContext.mockReturnValue({loading:true});
// useAppContext.mockResolvedValue({loading:true});
// jest.resetAllMocks();

describe("App", () => {
  test("header is in the document", () => {
    render(<App />);
    expect(screen.getByRole("header")).toBeInTheDocument();
  });

  test("main title is in the document", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: /Welcome to YouTubit/i })
    ).toBeInTheDocument();
  });

  test("VideoList is in the document", () => {
    render(<App />);
    expect(screen.getByRole("videoList")).toBeInTheDocument();
  });

  test("videos are fetched after submitting a query", async () => {
    render(<App />);

    userEvent.type(screen.getByRole("textbox"), "Bohemian Rhapsody");
    fireEvent.click(screen.getByRole("button", { name: /search/i }));

    const items = await waitFor(() => screen.findAllByRole("videoItem"));

    expect(screen.getByRole("textbox")).toHaveValue("Bohemian Rhapsody");
    expect(items).toHaveLength(24);
    expect(items[0]).toHaveTextContent(/Bohemian Rhapsody/i);
  });

  test("player is displayed after clicking a video", async () => {
    render(<App />);

    const video = await screen.findAllByRole("videoItem")[0];
    fireEvent.click(video);

    const player = await waitFor(() => screen.findByRole("player"));
    expect(player).toBeInTheDocument;
  });

  test("player is updated after clicking a related video ", async () => {
    render(<App />);

    const video = await screen.findAllByRole("videoItem")[0];
    fireEvent.click(video);
    const relatedVideo = await screen.findAllByRole("videoItem")[0];
    fireEvent.click(relatedVideo);

    const player = await waitFor(() => screen.findByRole("player"));
    expect(player).toBeInTheDocument;
  });
});
