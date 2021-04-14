import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export const lightTheme = {
  background: "#fff",
  item: "#f8f8f8",
  itemHover: "#f0f0f0",
  primaryText: "#000",
  secondaryText: "#010101",
  icon: "#fff",
  toggle: "transparent",
};

export const darkTheme = {
  background: "#121212",
  item: "#141414",
  itemHover: "#161616",
  primaryText: "#c0c0c0",
  secondaryText: "#999",
  icon: "#000",
  toggle: "#feb742",
};
