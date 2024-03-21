import axios from "axios";

const create = () => {
  const api = axios.create({
    baseURL: "http://localhost:8000/api",
  });

  const setAuthToken = (authToken) => {
    if (authToken) {
      api.defaults.headers.common["Authorization"] = `Bearer ${authToken}`;
      return true;
    }
    return false;
  };

  const removeAuthToken = () => {
    delete axios.defaults.headers.common["Authorization"];
  };

  const signIn = (loginAttributes) => {
    return api
      .post(
        `login?user[email]=${loginAttributes?.email}&user[password]=${loginAttributes?.password}`
      )
      .then((response) => response)
      .catch((error) => error.response);
  };

  const getChatrooms = () => {
    return api
      .get(`chatrooms`)
      .then((response) => response)
      .catch((error) => error.response);
  };

  const getChatroom = (chatroomId) => {
    return api
      .get(`chatrooms/${chatroomId}`)
      .then((response) => response)
      .catch((error) => error.response);
  };

  return {
    setAuthToken,
    removeAuthToken,
    signIn,
    getChatrooms,
    getChatroom,
  };
};

export default create();
