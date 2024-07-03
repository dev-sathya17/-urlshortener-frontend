import { instance } from "./instance";

const userServices = {
  // API Call to register a user
  registerUser: async (firstName, lastName, email, password) => {
    return await instance.post("/users", {
      firstName,
      lastName,
      email,
      password,
    });
  },

  // Activating user account
  activateUser: async (userId) => {
    return await instance.get(`/users/activate/${userId}`);
  },

  // User login
  login: async (email, password) => {
    // make a POST request to the login endpoint
    return await instance.post(
      "/users/login",
      {
        email,
        password,
      },
      { withCredentials: true }
    );
  },
  forgot: async (email) => {
    return await instance.post("/users/forgot", { email });
  },
  verify: async (authString) => {
    return await instance.get(`/users/verify/${authString}`);
  },
  reset: async (email, password) => {
    return await instance.post("/users/reset", { email, password });
  },
};

export default userServices;
