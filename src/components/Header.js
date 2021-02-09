import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <nav>
      <ul>
        <Link to='/' exact>
          <li>Home</li>
        </Link>
        <Link to='/signup' exact>
          <li>Signup</li>
        </Link>
        <Link to='/login' exact>
          <li>Login</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Header;
