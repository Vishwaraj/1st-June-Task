import { useState } from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";


// add movies function

export function AddMovie({ movie, setMovie }) {
  const [movieName, setMovieName] = useState("");
  const [image, setImage] = useState("");
  const [summary, setSummary] = useState("");
  const [rating, setRating] = useState(0);
  const [video, setVideo] = useState("");

  const navigate = useNavigate();

  const submitMovie = (
    event,
    movieName,
    image,
    summary,
    rating,
    video,
    movie,
    setMovie
  ) => {
    event.preventDefault();
  
    let newMovie = {
      name: movieName,
      image: image,
      rating: +rating,
      description: summary,
      video: video
    };
  
    fetch("https://6278eaca6ac99a91065f4bbb.mockapi.io/movies", {
      method: "POST",
       
      body: JSON.stringify(newMovie),
       
      headers: {
          "Content-Type": "application/json"
      }
  })
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .then(() => navigate('/movies'));
  
  }

  return (
    <div className="search-area">
      <form>
        <div className="form-input">

          <TextField onChange={(event) => setMovieName(event.target.value)}
            type="text" id="standard-basic" label="Name" variant="standard" />

        </div>
        <div className="form-input">

          <TextField onChange={(event) => setImage(event.target.value)}
            type="text" id="standard-basic" label="Image" variant="standard" />

        </div>
        <div className="form-input">
      
            <TextField multiline onChange={(event) => setSummary(event.target.value)}
          type="text" id="standard-basic" label="Summary" variant="standard" />
        </div>
            
        <div className="form-input">

          <TextField id="standard-basic" label="Rating" variant="standard" min={1}
            max={10}
            onChange={(event) => setRating(event.target.value)}
            type="number"/>
        </div>

        <div className="form-input">

          <TextField onChange={(event) => setVideo(event.target.value)}
            type="text" id="standard-basic" label="Video" variant="standard" />

        </div>

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
          }}>Add Movie</Button>
      </form>
    </div>
  );
}



