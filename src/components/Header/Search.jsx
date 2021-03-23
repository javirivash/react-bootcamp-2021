import React from "react";
import styled from "styled-components";

const Input = styled.input`
  font-size: 16px;
  color: #c0c0c0;
  background-color: #202020;
  border-radius: 3px;
  margin: 0 auto;
  width: 300px;
  padding: 8px;
`;

const Search = () => {
  return <Input placeholder="Search"></Input>;
};

export default Search;
