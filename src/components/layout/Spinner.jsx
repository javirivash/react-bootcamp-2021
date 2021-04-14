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
        style={{
          width: "50px",
          margin: "auto",
          paddingTop: "200px",
          display: "block",
        }}
      />
    )
  );
};

export default Spinner;
