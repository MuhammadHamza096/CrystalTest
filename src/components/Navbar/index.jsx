import Input from "../InputBox";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
// import PersonIcon from '@mui/icons-material/Person';
// import profileImage from "../../assets/person-image.jpg";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="container">
      <div className="navbar">
        <div className="navbar-left">
          <MenuIcon className="menu-icon" onClick={toggleSidebar} />
          <Input
            placeholder="Search product,supplier,order"
            Icon={SearchIcon}
          />
        </div>
        <div class="navbar-right">
          <NotificationsIcon />
          <div className="profile-icon">
            {/* <img src={profileImage} alt="profile" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
