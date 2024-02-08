import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import './index.css';

function Favorites() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const myList = localStorage.getItem("@primeFlix");
    setMovies(JSON.parse(myList) || []);
  }, [])

  function handleRemoveMovie(id) {
    let filterMovie = movies.filter((movie) => {
      return (movie.id !== id)
    })

    setMovies(filterMovie);

    localStorage.setItem('@primeFlix', JSON.stringify(filterMovie))
  }

  console.log(movies.length)

  return (
    <div className="app-favorite__container">
      <h1>Meus Filmes</h1>

      {movies.length === 0 && <p>Você não possui filmes salvos </p>}

      <ul className="app-favorite__list">
        {movies.map((movie) => {

          return (
            <li key={movie.id}>
              <Link className="app-favorite__article-container" to={`/filme/${movie.id}`} key={movie.id}>
                <article className="app-favorite__article" >
                  <img className="app-favorite__article-img" src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt={movie.title} />
                  <Link className="app-favorite__article-title" to={`/filme/${movie.id}`}>{movie.title}</Link>

                </article>
              </Link>
              <button onClick={() => handleRemoveMovie(movie.id)}> remover</button>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default Favorites;