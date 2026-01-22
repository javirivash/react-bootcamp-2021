import React, { useContext } from "react";
import spinner from "./spinner.gif";
import AppContext from "../../context/appContext";

const Spinner = () => {
  const appContext = useContext(AppContext);
  const { loading } = appContext;

  return (
    loading && (
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: "200px", margin: "200px auto", display: "block" }}
      />
    )
  );
};

export default Spinner;
