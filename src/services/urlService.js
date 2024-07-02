import { protectedInstance } from "./instance";

const urlServices = {
  getUrlCount: async () => {
    return await protectedInstance.get("/urls/count");
  },
};

export default urlServices;
