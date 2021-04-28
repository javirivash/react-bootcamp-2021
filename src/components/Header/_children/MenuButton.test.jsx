import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AppContext from "../../../context/app/appContext";
import MenuButton from "./MenuButton";

describe("MenuButton", () => {
  const shouldShowMenu = false;
  const toggleMenu = jest.fn();
  const renderComponent = (contextValue = {}) => {
    render(
      <AppContext.Provider
        value={{
          shouldShowMenu,
          toggleMenu,
          ...contextValue,
        }}
      >
        <MenuButton />
      </AppContext.Provider>
    );
  };

  it("calls toggleMenu every time it's clicked", () => {
    renderComponent();
    userEvent.click(screen.getByRole("button"));
    userEvent.click(screen.getByRole("button"));
    userEvent.click(screen.getByRole("button"));
    userEvent.click(screen.getByRole("button"));
    expect(toggleMenu).toHaveBeenCalledTimes(4);
  });

  it("shows menu icon when menu is not showing", () => {
    renderComponent();
    expect(screen.getByRole("button", { name: /menu/i })).toBeInTheDocument();
  });

  it("shows close icon when menu is showing", () => {
    renderComponent({ shouldShowMenu: true });
    expect(screen.getByRole("button", { name: /close/i })).toBeInTheDocument();
  });
});
