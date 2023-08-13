export const IsUserLoogedIn = () => {
  const token = localStorage.getItem("authorization");
  if (token) {
    return true;
  }
  return false;
};
