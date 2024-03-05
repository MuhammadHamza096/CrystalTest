// Pages
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Home from "../page/Home";
import Favorites from "../page/Favorites";
import Menu from "../page/Menu";
import Meal from "../page/Meal";
import Generator from "../page/Generator";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

const Routing = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const routePaths = [
    {
      name: "Home",
      Component: Home,
      path: "/",
    },
    {
      name: "Menu",
      Component: Menu,
      path: "/menu",
    },
    {
      name: "My Favourites",
      Component: Favorites,
      path: "/favourites",
    },
    
    {
      name: "Meal Generator",
      Component: Generator,
      path: "/meal",
    },
    {
      name: "Specific Meal",
      Component: Meal,
      path: "/menu/:mealId",
    },   
  ];

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  return (
    <Router>
      <div className="main-container">
        <Sidebar
          handleDrawerClose={handleDrawerClose}
          mobileOpen={mobileOpen}
          handleDrawerTransitionEnd={handleDrawerTransitionEnd}
        />
        <div className="main-container-right">
          <Navbar toggleSidebar={handleDrawerToggle} />
          <Routes>
            {routePaths.map(({ Component, path }) => {
              return <Route path={path} element={<Component />} />;
            })}
          </Routes>
        </div>
      </div>
    </Router>
  );
};
export default Routing;
