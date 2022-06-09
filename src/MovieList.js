import { Counter } from "./Counter";
import { Movie } from "./Movie";


// function to show movies
export function MovieList({ movie, setMovie }) {
  return (
    <div className="movie-list">
      {movie.map((movie, index) => {
        return (
          <div>
            <Movie
              name={movie.name}
              image={movie.image}
              rating={movie.rating}
              description={movie.description}
              id={index} />
          </div>
        );
      })}
    </div>
  );
}
