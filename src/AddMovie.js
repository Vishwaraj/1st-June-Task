import { useState } from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



// add movies function
export function AddMovie({ movie, setMovie }) {
  const [movieName, setMovieName] = useState("");
  const [image, setImage] = useState("");
  const [summary, setSummary] = useState("");
  const [rating, setRating] = useState(0);
  const [video, setVideo] = useState("");

  return (
    <div className="search-area">
      <form>
        <div className="form-input">
          {/* <label>Name</label>
          <input
            onChange={(event) => setMovieName(event.target.value)}
            type="text" /> */}
          <TextField onChange={(event) => setMovieName(event.target.value)}
            type="text" id="standard-basic" label="Name" variant="standard" />

        </div>
        <div className="form-input">
          {/* <label>Image</label>
          <input
            onChange={(event) => setImage(event.target.value)}
            type="text" /> */}
          <TextField onChange={(event) => setImage(event.target.value)}
            type="text" id="standard-basic" label="Image" variant="standard" />

        </div>
        <div className="form-input">
          {/* <label>Summary</label>
          <input
            id="summary-input"
            onChange={(event) => setSummary(event.target.value)}
            type="text" /> */}
            <TextField multiline onChange={(event) => setSummary(event.target.value)}
          type="text" id="standard-basic" label="Summary" variant="standard" />
        </div>
          
        <div className="form-input">
          {/* <label>Rating</label>
          <input
            min={1}
            max={10}
            onChange={(event) => setRating(event.target.value)}
            type="number" /> */}
          <TextField id="standard-basic" label="Rating" variant="standard" min={1}
            max={10}
            onChange={(event) => setRating(event.target.value)}
            type="number"/>
        </div>

        <div className="form-input">
          {/* <label>Name</label>
          <input
            onChange={(event) => setMovieName(event.target.value)}
            type="text" /> */}
          <TextField onChange={(event) => setVideo(event.target.value)}
            type="text" id="standard-basic" label="Video" variant="standard" />

        </div>

        {/* <button
          onClick={(event) => {
            submitMovie(
              event,
              movieName,
              image,
              summary,
              rating,
              movie,
              setMovie
            );
          }}
        >
          <Link to="/movies">Add Movie</Link>
        </button> */}
        <Button  variant='outlined'
         onClick={(event) => {
            submitMovie(
              event,
              movieName,
              image,
              summary,
              rating,
              video,
              movie,
              setMovie
            );
          }}><Link id='movie-submit-button' to="/movies">Add Movie</Link></Button>
      </form>
    </div>
  );
}
function submitMovie(
  event,
  movieName,
  image,
  summary,
  rating,
  video,
  movie,
  setMovie
) {
  event.preventDefault();
  // console.log(movieName, image, summary, rating);
  let newMovie = {
    name: movieName,
    image: image,
    rating: +rating,
    description: summary,
    video: video
  };

  // console.log(newMovie);
  setMovie([...movie, newMovie]);
  console.log(movie);
}


