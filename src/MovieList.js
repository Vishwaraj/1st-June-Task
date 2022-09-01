import { Counter } from "./Counter";
import { Movie } from "./Movie";
import {useState, useEffect} from 'react';
import {API} from './global';



// function to show movies


export function MovieList({setMovie, movie , deleteMovie}) {

  // const [movie, setMovie] = useState([]);

  const generatedToken = localStorage.getItem('token');

  const getMovies = () => {
    fetch(`${API}/movies`, {
      headers: {
        'x-auth-token': generatedToken
      }
    })
    .then(response => response.json())
    .then(data => setMovie(data));
  }
  useEffect(() => getMovies, []);

  const deleteMovieApi = (id) => {
    fetch(`${API}/movies/${id}`, {
      method: "DELETE"
    })
    .then(() => getMovies())
  }

 

  

  return (

    <div className="movie-list">
    {generatedToken ? movie.map((movie) => {
        return (
          <div key={movie.id}>
            <Movie
              name={movie.name}
              image={movie.image}
              rating={movie.rating}
              description={movie.description}
              id={movie._id}
              deleteMovieApi = {deleteMovieApi}
              setMovie={setMovie}
               />
          </div>
        );
      })
      : <h1>You are not authorized, please log in or create an account.</h1>}

    </div>
  );
}
