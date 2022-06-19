import { Counter } from "./Counter";
import { Movie } from "./Movie";
import {useState, useEffect} from 'react';


// function to show movies


export function MovieList({setMovie, movie , deleteMovie}) {

  // const [movie, setMovie] = useState([]);

  const getMovies = () => {
    fetch('https://6278eaca6ac99a91065f4bbb.mockapi.io/movies')
    .then(response => response.json())
    .then(data => setMovie(data));
  }
  useEffect(() => getMovies, []);

  const deleteMovieApi = (id) => {
    fetch(`https://6278eaca6ac99a91065f4bbb.mockapi.io/movies/${id}`, {
      method: "DELETE"
    })
    .then(() => getMovies())
  }


  return (
    <div className="movie-list">
      {movie.map((movie) => {
        return (
          <div>
            <Movie
              name={movie.name}
              image={movie.image}
              rating={movie.rating}
              description={movie.description}
              id={movie.id}
              deleteMovieApi = {deleteMovieApi}
              setMovie={setMovie}
               />
          </div>
        );
      })}
    </div>
  );
}
