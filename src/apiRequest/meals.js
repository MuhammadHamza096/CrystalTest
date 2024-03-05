import axios from "axios";

const api = axios.create({
  baseURL: `https://www.themealdb.com/api/json/v1/1/filter.php`,
});

export const getMealByCategory = async (categoryName) => {
  const {
    data: { meals },
  } = await api.get(`?c=${categoryName}`);
  return meals;
};
