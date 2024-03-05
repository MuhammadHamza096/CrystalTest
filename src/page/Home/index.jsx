import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import './home.scss';

const tiles = [
  { path: "/menu", label: "Menu", bgColor: "#fce4ec" }, 
  { path: "/favourites", label: "Favorites", bgColor: "#edf5fe" },
  { path: "/meal", label: "Meal Generator", bgColor: "#f5f5f5" },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="home-container">
        <Grid container spacing={2}>
          {tiles.map((tile, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card
                sx={{ backgroundColor: tile.bgColor, cursor: "pointer" }}
                className="home-card"
                onClick={() => navigate(tile.path)}
              >
                <CardContent>
                  <Typography variant="h5" component="h2" textAlign="center">
                    {tile.label}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Home;
