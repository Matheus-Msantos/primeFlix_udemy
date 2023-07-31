import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/img/Logo_primeFlix.png';

import './index.css';

function Header() {
  return (
    <header className="app-header">
      <div className="app-header__logo-container">
        <Link to="/">
          <img className="app-header__logo" src={Logo} title="PrimeFlix" />
        </Link>
      </div>

      <nav className="app-header__nav">
        <ul className="app-header__nav-itens">
          <li className="app-header__nav-item">
            <Link className="app-header__nav-link" to="/">Home</Link>
          </li>
          <li className="app-header__nav-item">
            <Link className="app-header__nav-link" to="/favoritos">Favoritos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;