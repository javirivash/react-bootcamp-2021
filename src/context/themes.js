import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  color: "#fff",
};

export const darkTheme = {
  color: "#000",
};

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;
