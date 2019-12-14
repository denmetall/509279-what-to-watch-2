export const getAdaptedUser = (user) => {
  const {
    id = null,
    email = ``,
    name = ``,
    avatar_url: avatarUrl = ``
  } = user;
  return {
    id, email, name, avatarUrl
  };
};
