import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiMovies } from "../../Services/ApiMovies";

import './index.css';

function Movies() {

  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    async function loadMovie() {
      await apiMovies.get(`/movie/${id}`, {
        params: {
          api_key: '62850432ba1c35551e42d884af1327ce',
          language: 'pt-BR'
        }
      })
        .then((res) => {
          setMovie(res.data);
          setLoading(false);
        })
        .catch(() => {
          console.log('filme não encontrado')
        })
    }

    loadMovie();

    return () => {
      console.log('Pagina Desmontada');
    }
  }, [])

  if (loading) {
    return (
      <>
        <div className="app-loading__overlay"></div>
        <div className="app-loading__spiner"></div>
      </>
    );
  }

  return (
    <div className="app-movie__container">
      <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />

      <div className="app-movie__article-info">
        <h1>{movie.title}</h1>

        <div className="app-movie__article-genres-container">
          {movie.genres.map((genres) => {
            return (

              <span>{genres.name}</span>
            )
          })}
        </div>
        <p className="app-movie-article-time">
          Duração:
          <strong> {movie.runtime}m</strong>
        </p>
        <p className="app-movie__article-resume">{movie.overview}</p>
        <span className="app-movie__article-rating">Avaliação: {movie.vote_average.toString().substring(0, 4)} / 10</span>

        <div className="app-movie__article-button-area">
          <button className="app-movie__article_button-save">Salvar</button>
          <button className="app-movie__article_button-trailer">Trailer</button>
        </div>
      </div>
    </div>
  );
}

export default Movies;