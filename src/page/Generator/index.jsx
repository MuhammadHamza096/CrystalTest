import { useQuery } from "react-query";
import Grid from "@mui/material/Grid";
import MediaCard from "../../components/Card";
import CircularProgress from "@mui/material/CircularProgress";
import "./generator.scss";
import { getRandomMeal } from "../../apiRequest/generator";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFavorites,
} from "../../redux/actions/addFavorites";

const Generator = () => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state);
  const { isLoading, data: meals } = useQuery(
    ["random"],
    () => getRandomMeal(),
    {
      refetchOnWindowFocus: false,
      retry: false,
    }
  );

  const isFavorite = (idMeal) => {
    return favorites.some((favorite) => favorite.idMeal === idMeal);
  };

  return (
    <div className="generator">
      <div className="generator-container">
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
            {meals.map(({ strCategory, strMealThumb, idMeal }, index) => {
              const favorite = isFavorite(idMeal);
              return (
                <Grid item xs={12} sm={6} md={4}>
                  <MediaCard
                    key={index}
                    title={strCategory}
                    image={strMealThumb}
                    showButton={true}
                    buttonText={
                      favorite ? "Remove from Favorites" : "Add to Favorites"
                    }
                    buttonClickHandler={() =>
                      dispatch(
                        favorite
                          ? removeFavorites({
                              strMeal: strCategory,
                              strMealThumb,
                              idMeal,
                            }) // Ensure your action accepts idMeal to remove
                          : addToFavorites({
                              strMeal: strCategory,
                              strMealThumb,
                              idMeal,
                            })
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

export default Generator;
