import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate, useParams } from "react-router-dom";


// add movies function

export function EditMovie({ movie, setMovie }) {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const { id } = useParams();
  console.log(id);

  const goToMovie = () => {
    fetch(`https://6278eaca6ac99a91065f4bbb.mockapi.io/movies/${id}`, {
      method: "GET"
    })
    .then((response) => response.json())
    .then((data) => setSelectedMovie(data));
  }

  useEffect(() => goToMovie(), []);

  

  return  selectedMovie ? <EditMovieForm id={id} movie={movie} setMovie={setMovie} selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} /> : <h1>Loading...</h1> 

}

// -----------------------Edit movie form--------------------------

function EditMovieForm({ selectedMovie, movie, setMovie, id}) {

  const [movieName, setMovieName] = useState(selectedMovie.name);
  const [image, setImage] = useState(selectedMovie.image);
  const [summary, setSummary] = useState(selectedMovie.description);
  const [rating, setRating] = useState(selectedMovie.rating);
  const [video, setVideo] = useState(selectedMovie.video);



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
  
    fetch(`https://6278eaca6ac99a91065f4bbb.mockapi.io/movies/${id}`, {
      method: "PUT",
       
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
          type="text" id="standard-basic" label="Name" variant="standard" 
            value={movieName}
          />

      </div>
      <div className="form-input">

        <TextField onChange={(event) => setImage(event.target.value)}
          type="text" id="standard-basic" label="Image" variant="standard" 
          value={image}
          />

      </div>
      <div className="form-input">
    
          <TextField multiline onChange={(event) => setSummary(event.target.value)}
        type="text" id="standard-basic" label="Summary" variant="standard" 
        value={summary}
        />
      </div>
          
      <div className="form-input">

        <TextField id="standard-basic" label="Rating" variant="standard" min={1}
          max={10}
          onChange={(event) => setRating(event.target.value)}
          type="number"
          value={rating}
          />
      </div>

      <div className="form-input">

        <TextField onChange={(event) => setVideo(event.target.value)}
          type="text" id="standard-basic" label="Video" variant="standard" 
          value={video}
          />

      </div>

      <Button  variant='outlined'
      color='success'
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
        }}>Save Edit</Button>
    </form>
  </div>
  );
}