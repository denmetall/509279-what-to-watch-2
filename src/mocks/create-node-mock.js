import React from "react";

const createNodeMock = (element) => {
  if (element === `video`) {
    return <video
      muted
      width="280"
      height="175"
      poster=""
    />;
  }

  if (element === `source`) {
    return <source src=""/>;
  }

  return null;
};

export default createNodeMock();
