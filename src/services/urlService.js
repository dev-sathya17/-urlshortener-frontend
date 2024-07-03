import { protectedInstance } from "./instance";

const urlServices = {
  getUrlCount: async (month) => {
    return await protectedInstance.get(`/urls/count/?month=${month}`);
  },
  getTodayUrlCount: async () => {
    try {
      const response = await protectedInstance.get("/urls/todayCount");
      return response.data.count;
    } catch (error) {
      return 0;
    }
  },
  shortenUrl: async (url) => {
    return await protectedInstance.post("/urls/shorten", { url });
  },
  getUrls: async () => {
    return await protectedInstance.get("/urls");
  },
};

export default urlServices;
