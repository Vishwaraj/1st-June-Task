import { Counter } from "./Counter";
import { Movie } from "./Movie";
import {useState, useEffect} from 'react';
import {API} from './global';



// function to show movies


export function MovieList({setMovie, movie , deleteMovie}) {

  // const [movie, setMovie] = useState([]);

  const getMovies = () => {
    fetch(`${API}/movies`)
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
      {movie.map((movie) => {
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
      })}
    </div>
  );
}
