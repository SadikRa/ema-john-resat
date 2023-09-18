import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
  const { LogOut, user } = useContext(AuthContext);

  const handleLogOut = () => {
    LogOut();
  };
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
        {user &&
          <button onClick={handleLogOut}>Log Out</button>
        }
      </div>
    </nav>
  );
};

export default Header;
