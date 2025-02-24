const API_BASE = "https://api.spoonacular.com";
const API_KEY = "9e73d0484ab84cf7a8a8c6094c44b39c";

const foodAPI = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    apiKey: API_KEY,
    number: 10,
  },
});

export default foodAPI;
