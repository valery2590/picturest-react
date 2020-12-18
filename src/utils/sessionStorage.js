const getTokenFromLocalStorage = () => {
  localStorage.getItem("picturest-token");
};

const setTokenFromLocalStorage = (token) => {
  localStorage.setItem("picturest-token", token);
};

const clearTokenFromLocalStorage = () => {
  localStorage.removeItem("picturest-token");
};
