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
};

export default userServices;
