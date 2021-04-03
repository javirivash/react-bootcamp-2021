import React from "react";
import PropTypes from "prop-types";

const RelatedVideos = ({ resultVideos }) => {
  console.log(resultVideos);
  return <div>Hello</div>;
};

RelatedVideos.propTypes = {
  resultVideos: PropTypes.array.isRequired,
};

export default RelatedVideos;
