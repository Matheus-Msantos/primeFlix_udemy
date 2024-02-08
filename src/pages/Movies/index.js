import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { apiMovies } from "../../Services/ApiMovies";

import './index.css';

function Movies() {

  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate()

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
          navigate('/', { replace: true });
          return;
        })
    }

    loadMovie();

    return () => {
      console.log('Pagina Desmontada');
    }
  }, [id, navigate])

  function saveMovie() {
    const wishlist = localStorage.getItem("@primeFlix");

    let moviesSave = JSON.parse(wishlist) || [];

    const hasMovies = moviesSave.some((movieSave) => movieSave.id === movie.id);

    if (hasMovies) {
      //Todo Create popup for info
      alert('Você já possue esse filme salvo');
      return;
    }

    moviesSave.push(movie);
    localStorage.setItem('@primeFlix', JSON.stringify(moviesSave));
    alert('Filme salvo');

  }

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
          {movie.genres.map((genres, index) => {
            return (
              <span key={index}>{genres.name}</span>
            )
          })}
        </div>
        <p className="app-movie-article-time">
          Duração:
          <strong> {movie.runtime}m</strong>
        </p>
        <p className="app-movie__article-resume">{movie.overview}</p>
        <span className="app-movie__article-rating">Avaliação: {movie.vote_average.toString().substring(0, 3)} / 10</span>

        <div className="app-movie__article-button-area">
          <button className="app-movie__article_button-save" onClick={saveMovie}>Salvar</button>

          <button className="app-movie__article_button-trailer">
            <a target="blank" rel="noreferrer" href={`https://youtube.com/results?search_query=${movie.title} Trailer Official `} >Trailer</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Movies;