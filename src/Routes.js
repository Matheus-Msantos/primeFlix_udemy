import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Favorites from "./pages/Favorites";
import Header from "./Components/Header";
import Page404 from "./pages/Erros/Page404";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filmes/:id" element={<Movies />} />
        <Route path="/favoritos" element={<Favorites />} />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;