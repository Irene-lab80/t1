export const useAuth = () => {
  const token = localStorage.getItem("access_token");

  return !!token;
};
