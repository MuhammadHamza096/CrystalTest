
import Grid from "@mui/material/Grid";
import MediaCard from "../../components/Card";
import "./favorites.scss";
import { useSelector,useDispatch } from "react-redux";
import { removeFavorites } from "../../redux/actions/addFavorites";

const Favorites = () => {
  const {favorites} = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="favorite">
      <div className="favorite-container">

          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {favorites.map(({ strMeal, strMealThumb, idMeal }, index) => {
              return (
                <Grid item xs={12} sm={6} md={4}>
                  <MediaCard
                    key={index}
                    title={strMeal}
                    image={strMealThumb}
                    showButton={true}
                    buttonText= "Remove"
                    buttonClickHandler={() =>
                      dispatch(
                        removeFavorites({ strMeal, strMealThumb, idMeal })
                      )
                    }
                  />
                </Grid>
              );
            })}
          </Grid>
        
      </div>
    </div>
  );
};

export default Favorites;
