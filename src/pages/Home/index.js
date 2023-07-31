import { useState, useEffect } from "react";
import { apiMovies } from '../../Services/ApiMovies'
import './index.css';

function Home() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      const response = await apiMovies.get('movie/now_playing', {
        params: {
          api_key: '62850432ba1c35551e42d884af1327ce',
          language: 'pt-BR',
          page: 1
        }
      });

      setMovies(response.data);
    };

    loadMovies();
  }, [])

  console.log(movies);
  return (
    <>Home</>
  );
}

export default Home;