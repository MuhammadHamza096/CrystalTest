import axios from "axios";
const api = axios.create({
  baseURL: `https://www.themealdb.com/api/json/v1/1/categories.php`,
});

export const getMealCategories = async () => {
  const {
    data: { categories },
  } = await api.get(``);
  return categories;
};
