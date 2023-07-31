import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Movies from "./pages/Movies";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filmes/:id" element={<Movies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;