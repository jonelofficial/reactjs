import { useState } from "react";

const useToken = () => {
  const getToken = () => {
    const userToken = JSON.parse(localStorage.getItem("token"));
    return userToken;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    localStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken, token);
  };
  return {
    setToken: saveToken,
    token,
  };
};

export default useToken;
