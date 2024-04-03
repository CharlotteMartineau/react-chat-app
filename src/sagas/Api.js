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
    const { email, password } = loginAttributes;
    return api
      .post(`login?user[email]=${email}&user[password]=${password}`)
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

  const createChatroomMessage = (messageAttributes) => {
    const { chatroom_id, message_content } = messageAttributes;
    return api
      .post(`chatrooms/${chatroom_id}/messages?content=${message_content}`)
      .then((response) => response)
      .catch((error) => error.response);
  };

  const createChatroomMemberships = (membershipsAttributes) => {
    const { chatroom_id, user_emails } = membershipsAttributes;
    return api
      .post(
        `chatrooms/${chatroom_id}/chatroom_memberships?user_emails[]=${user_emails}`
      )
      .then((response) => response)
      .catch((error) => error.response);
  };

  return {
    setAuthToken,
    removeAuthToken,
    signIn,
    getChatrooms,
    getChatroom,
    createChatroomMessage,
    createChatroomMemberships,
  };
};

export default create();
