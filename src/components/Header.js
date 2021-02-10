import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="navbar">
      <div className="container flex justify-between item-center">
        <Link className="brand" to="/" exact>
          <img src="/images/logo.svg" alt="Brand Logo" />
        </Link>
        <nav>
          <ul className="flex item-center">
            <li className="nav-item">
              <Link className="active" to="/" exact>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" exact>
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" exact>
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
