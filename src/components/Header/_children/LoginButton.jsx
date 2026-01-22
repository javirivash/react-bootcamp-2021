import React, { useState } from "react";
import { useAppContext } from "../../../context/app/appContext";
import AriaModal from "react-aria-modal";
import styled from "styled-components";

const StyledButton = styled.button`
  justify-self: end;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  color: #c0c0c0;
  background-color: transparent;
  border: solid 1px #c0c0c0;
  border-radius: 14px;
  margin: 0 10px;
  padding: 8px 12px;
  min-width: 70px;
  cursor: pointer;
  opacity: 0.7;

  :hover {
    opacity: 1;
  }
`;

const LoginButton = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const { searchText } = useAppContext();

  const activateModal = () => {
    setIsModalActive(true);
  };
  const deactivateModal = () => {
    setIsModalActive(false);
  };
  const getApplicationNode = () => {
    return document.getElementById("App");
  };

  const modal = isModalActive ? (
    <AriaModal
      titleText="demo one"
      verticallyCenter={true}
      initialFocus="#usernameTextbox"
      underlayStyle={{ paddingTop: "2em" }}
      onExit={deactivateModal}
      getApplicationNode={getApplicationNode}
    >
      <div id="demo-one-modal" className="modal">
        <div className="modal-body">
          <h1>{searchText}</h1>
          <p>
            Here is a modal <a href="#">with</a> <a href="#">some</a>{" "}
            <a href="#">focusable</a> parts.
          </p>
        </div>
        <footer className="modal-footer">
          <button id="demo-one-deactivate" onClick={activateModal}>
            deactivate modal
          </button>
        </footer>
      </div>
    </AriaModal>
  ) : (
    false
  );

  return (
    <div>
      <StyledButton onClick={activateModal}>Log in</StyledButton>;{modal}
    </div>
  );
};

export default LoginButton;
