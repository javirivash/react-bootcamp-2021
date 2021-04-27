import React from "react";
import { render, screen } from "@testing-library/react";
import FavoritesPlayer from "./FavoritesPlayer";
import AppContext from "../../context/app/appContext";
import {
  currentUser,
  favoriteVideo as selectedVideo,
  currentFavorites,
} from "../../utils/testMocks";
jest.mock("react-router-dom", () => ({
  useHistory: () => [],
  useLocation: () => ({ pathname: "/favorites/player" }),
}));

describe("FavoritesPlayer", () => {
  const renderComponent = (contextValue = {}) => {
    render(
      <AppContext.Provider
        value={{
          currentUser,
          selectedVideo,
          currentFavorites,
          ...contextValue,
        }}
      >
        <FavoritesPlayer />
      </AppContext.Provider>
    );
  };

  it("renders iframe including link to the selected video ", () => {
    const videoLink = `https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`;
    renderComponent();
    const iframe = screen.getByRole("presentation");
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute("src", videoLink);
  });

  it("renders videos list title", () => {
    renderComponent();
    expect(
      screen.getByRole("heading", { name: /More of your favorites/i })
    ).toBeInTheDocument();
  });

  it("renders alternative title when there are no favorite videos", () => {
    renderComponent({ currentFavorites: [] });
    expect(
      screen.getByRole("heading", { name: /Add more favorites to watch/i })
    ).toBeInTheDocument();
  });

  it("renders videos list", () => {
    renderComponent();
    expect(screen.getByRole("videoList")).toBeInTheDocument();
  });
});
