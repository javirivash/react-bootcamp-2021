import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Form = styled.form`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 300px;

  #text {
    font-size: 16px;
    color: #c0c0c0;
    background-color: #202020;
    border-radius: 3px 0 0 3px;
    width: 85%;
    padding: 8px;
  }

  #submit {
    font-size: 20px;
    color: #a0a0a0;
    background-color: #202020;
    border-left: 1px solid #101010;
    border-radius: 0 3px 3px 0;
    width: 15%;
    cursor: pointer;
  }

  #submit:hover {
    background-color: #181818;
  }

  #submit:active {
    color: #d0d0d0;
  }
`;

const Search = ({ handleSearch }) => {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };
  const onClick = () => {
    document.getElementById("text").select();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text !== "") {
      handleSearch(text);
      document.getElementById("text").select();
    } else {
      console.log("Enter a search text");
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <input
        id="text"
        type="text"
        name="text"
        placeholder="Search"
        value={text}
        onChange={onChange}
        onClick={onClick}
      />
      <input
        id="submit"
        type="submit"
        className="material-icons"
        value="search"
      />
    </Form>
  );
};

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default Search;
