import { getMealCategories } from "../../apiRequest/menu";
import { useQuery } from "react-query";
import Grid from "@mui/material/Grid";
import MediaCard from "../../components/Card";
import CircularProgress from "@mui/material/CircularProgress";
import "./menu.scss";
import { Link } from "react-router-dom";

const Menu = () => {
  const { isLoading, data: categories } = useQuery(
    ["categories"],
    () => getMealCategories(),
    {
      refetchOnWindowFocus: false,
      retry: false,
    }
  );
  return (
    <div className="menu">
      <div className="menu-container">
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
            {categories.map(
              (
                { strCategory, strCategoryDescription, strCategoryThumb },
                index
              ) => {
                return (
                  <Grid item xs={12} sm={6} md={4}>
                    <Link
                      to={`/menu/${strCategory}`}
                      style={{ textDecoration: "none" }}
                    >
                      <MediaCard
                        key={index}
                        title={strCategory}
                        description={strCategoryDescription}
                        image={strCategoryThumb}
                      />
                    </Link>
                  </Grid>
                );
              }
            )}
          </Grid>
        )}
      </div>
    </div>
  );
};

export default Menu;
