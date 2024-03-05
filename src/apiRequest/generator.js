import axios from "axios";

const api = axios.create({
  baseURL: `www.themealdb.com/api/json/v1/1/random.php`,
});

export const getRandomMeal = async () => {
  const {
    data: { meals },
  } = await api.get(`https://www.themealdb.com/api/json/v1/1/random.php`);
  return meals;
};
