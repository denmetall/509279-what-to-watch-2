const createNodeMock = (element) => {
  if (element.type === `video`) {
    return {
      poster: `some`
    };
  }

  if (element.type === `source`) {
    return {
      src: `some.mp4`
    };
  }

  return null;
};

export default createNodeMock;
