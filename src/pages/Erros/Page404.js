import React from "react";
import { Link } from "react-router-dom";

import './index.css';

function Page404() {
  return (
    <div className="app-404">
      <div className="app-404__fixed">
        <h2 className="app-404__title">404</h2>
        <p className="app-404__text">Página não encontrada :(</p>
        <Link to="/" className="app-404__link">Voltar para home</Link>
      </div>
    </div>
  );
}

export default Page404;