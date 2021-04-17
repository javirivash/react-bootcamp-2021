import { createContext, useContext } from "react";

const appContext = createContext();

export const useAppContext = () => {
  const context = useContext(appContext);
  if (context === undefined) {
    throw new Error(
      "useAppContext must be used within AppState component tree"
    );
  }
  return context;
};

export default appContext;
