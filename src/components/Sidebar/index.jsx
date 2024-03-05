import "./sidebar.scss";
import { Link, useLocation  } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import React from "react";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import { Box, Drawer } from "@mui/material";

const drawerWidth = 240;
const Sidebar = ({
  window,
  handleDrawerTransitionEnd,
  handleDrawerClose,
  mobileOpen,
}) => {
  const location = useLocation();
  const drawer = (
    <div className="sidebar">
      <div className="sidebar-logo">Crystal Pakistan</div>
      <div className="sidebar-body">
        <ul>
          <li className={location.pathname === "/" ? "active" : ""}>
            <div className="sidebar-content">
              <div className="sidebar-icon">
                <HomeIcon />
              </div>
              <Link to="/">Home</Link>
            </div>
          </li>
          <li className={location.pathname === "/menu" ? "active" : ""}>
            <div className="sidebar-content">
              <div className="sidebar-icon">
                <RestaurantMenuIcon className="sidebar-icon" />
              </div>
              <Link to="/menu">Menu</Link>
            </div>
          </li>
          <li className={location.pathname === "/favourites" ? "active" : ""}>
            <div className="sidebar-content">
              <div className="sidebar-icon">
                <BookmarksIcon className="sidebar-icon" />
              </div>
              <Link to="/favourites">My Favourites</Link>
            </div>
          </li>
          <li className={location.pathname === "/meal" ? "active" : ""}>
            <div className="sidebar-content">
              <div className="sidebar-icon">
                <LunchDiningIcon />
              </div>
              <Link to="/meal">Meal Generator</Link>
            </div>
          </li>
        </ul>
      </div>
      <div className="sidebar-footer">
        <ul>
          <li>
            <div className="sidebar-content">
              <div className="sidebar-icon">
                {" "}
                <SettingsIcon />
              </div>
              <Link to="/store">Settings</Link>
            </div>
          </li>
          <li>
            <div className="sidebar-content">
              <div className="sidebar-icon">
                <LogoutIcon />
              </div>
              <Link to="/store">Logout</Link>
            </div>
          </li>
        </ul>
      </div>

      {/*  */}
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
