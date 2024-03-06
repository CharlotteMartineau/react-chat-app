import axios from "axios";

const create = () => {
  axios.defaults.baseURL = "http://localhost:3000/";

  const signIn = (loginAttributes) => {
    return axios
      .post(
        `login?user[email]=${loginAttributes?.email}&user[password]=${loginAttributes?.password}`
      )
      .catch((error) => error.response);
  };

  return {
    signIn,
  };
};

export default create();
