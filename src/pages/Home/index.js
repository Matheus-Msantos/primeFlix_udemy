import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment/moment";

import { apiMovies } from '../../Services/ApiMovies';

import './index.css';
import 'moment/locale/pt-br';

moment.locale('pt-br');

function Home() {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMovies() {
      const response = await apiMovies.get('movie/now_playing', {
        params: {
          api_key: '62850432ba1c35551e42d884af1327ce',
          language: 'pt-BR',
          page: 1
        }
      });

      setLoading(false)
      setMovies(response.data.results);
    };

    loadMovies();
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
    <div className="app-home__container">
      {movies.map((movie) => {

        var date = moment(movie.release_date).format('DD MMMM YYYY');
        return (
          <Link className="app-home__article-container" to={`/filme/${movie.id}`} key={movie.id}>
            <article className="app-home__article" >
              <img className="app-home__article-img" src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt={movie.title} />
              <Link className="app-home__article-title" to={`/filme/${movie.id}`}>{movie.title}</Link>

              <p className="app-home__article-date">Lançamento: {date}.</p>
            </article>
          </Link>
        )
      })
      }
    </div>
  );
}

export default Home;