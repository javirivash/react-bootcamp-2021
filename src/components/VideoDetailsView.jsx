import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin: 100px;

  h1 {
    color: red;
  }
`;

const VideoDetailsView = ({ name }) => {
  return (
    <StyledContainer>
      <h1>This is the VideoDetailsView by {name}</h1>
    </StyledContainer>
  );
};

VideoDetailsView.propTypes = {
  name: PropTypes.string.isRequired,
};

export default VideoDetailsView;
