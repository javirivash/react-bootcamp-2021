import React from "react";
import styled from "styled-components";

const Input = styled.input`
  font-size: 16px;
  color: #c0c0c0;
  background-color: #202020;
  border-radius: 3px;
  margin: 0 auto 0 0.6rem;
  width: 25rem;
  padding: 0.5rem;
`;

const Search = () => {
  return <Input placeholder="Search"></Input>;
};

export default Search;
