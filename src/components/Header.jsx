import { NavLink } from "react-router-dom";
import "./Components.css";
const Header = ({ handleLogout, page }) => {
  return (
    <header className="header">
      <h2 className="header-text">Welcome to URL Shortner</h2>
      <div className="button-group">
        <button className="view-btn">
          {page === "ViewURLS" ? (
            <NavLink to="/view" className="navLink">
              View My URLs
            </NavLink>
          ) : (
            <NavLink to="/dashboard" className="navLink">
              Dashboard
            </NavLink>
          )}
        </button>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
