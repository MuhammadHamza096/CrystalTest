import { useQuery } from "react-query";
import Grid from "@mui/material/Grid";
import MediaCard from "../../components/Card";
import CircularProgress from "@mui/material/CircularProgress";
import { useParams } from "react-router-dom";
import "./meal.scss";
import { getMealByCategory } from "../../apiRequest/meals";
import { useSelector, useDispatch } from "react-redux";
import {
  addToFavorites,
  removeFavorites,
} from "../../redux/actions/addFavorites";

const Meal = () => {
  let { mealId } = useParams();
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state);
  const { isLoading, data: meals } = useQuery(
    ["mealsByCategory", mealId],
    () => getMealByCategory(mealId),
    {
      refetchOnWindowFocus: false,
      retry: false,
    }
  );

  const isFavorite = (idMeal) => {
    return favorites.some((favorite) => favorite.idMeal === idMeal);
  };

  return (
    <div className="meal">
      <div className="meal-container">
        {isLoading ? (
          <div className="loader">
            <CircularProgress />
          </div>
        ) : (
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {meals.map(({ strMeal, strMealThumb, idMeal }, index) => {
              const favorite = isFavorite(idMeal);
              return (
                <Grid item xs={12} sm={6} md={4}>
                  <MediaCard
                    key={index}
                    title={strMeal}
                    image={strMealThumb}
                    showButton={true}
                    buttonText={
                      favorite ? "Remove from Favorites" : "Add to Favorites"
                    }
                    buttonClickHandler={() =>
                      dispatch(
                        favorite
                          ? removeFavorites({ strMeal, strMealThumb, idMeal }) // Ensure your action accepts idMeal to remove
                          : addToFavorites({ strMeal, strMealThumb, idMeal })
                      )
                    }
                  />
                </Grid>
              );
            })}
          </Grid>
        )}
      </div>
    </div>
  );
};

export default Meal;
