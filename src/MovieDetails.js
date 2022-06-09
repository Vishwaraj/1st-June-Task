import { useParams, useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

//to show movie details
export function MovieDetails({ movies }) {
  const { id } = useParams();
  console.log(id);
  const selectedMovie = movies[id];

  const styles = {
    color: selectedMovie.rating > 8 ? "green" : "gold",
  };

  const navigate = useNavigate();

  return (
    <div className='movie-details-container'>
      <div>
        <iframe
          width="100%"
          height="480"
          src={selectedMovie.video}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="movie-details">
        <div className='movie-rating'>
        <h2>{selectedMovie.name}</h2>
        <p style={styles}>⭐{selectedMovie.rating}</p>
        </div>
        <p id="movie-details-description">{selectedMovie.description}</p>
        {/* <button onClick={() => navigate(-1)}>Back</button> */}
        <ArrowBackIcon color='primary' onClick={() => navigate(-1)}/>
      </div>
        
    </div>
  );
}
