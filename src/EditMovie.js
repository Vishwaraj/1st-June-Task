import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from 'yup';
import {API} from './global';





// ----------------movie validation Schema----------------

const movieValidationSchema = yup.object({
  name: yup.string().required('A Movie always has name'),
  image: yup.string().required().min(10, 'Check your image link'),
  rating: yup.number().min(1, 'Wow this must be a boring movie, if not correct this.').max(10, 'I am going to watch it tonight!').required(),
  description: yup.string().required().min(30, 'Need a bigger summary'),
  video: yup.string().required().min(10, 'please enter the embeded url')
});

// -------------------edit movies function------------------

export function EditMovie({ movie, setMovie }) {
  const [selectedMovie, setSelectedMovie] = useState(null);


  const { id } = useParams();
  console.log(id);

  // ----------fetching data for the requested movie------------

  const goToMovie = () => {
    fetch(`${API}/movies/${id}`, {
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

// --------------------using formik----------------------

  const {handleChange, handleSubmit, values, errors, handleBlur, touched} = useFormik({
    initialValues: {
      name: selectedMovie.name,
      image: selectedMovie.image,
      rating: selectedMovie.rating,
      description: selectedMovie.description,
      video: selectedMovie.video
    },
    validationSchema: movieValidationSchema,
    onSubmit: (editedMovie) => {
     console.log(editedMovie);
    submitMovie(editedMovie);
    }
  })


  const navigate = useNavigate();

// -----------------function for editing the selected movie------------------

  const submitMovie = (
    editedMovie,
    movie,
    setMovie
  ) => {
  
    fetch(`${API}/movies/${id}`, {
      method: "PUT",
       
      body: JSON.stringify(editedMovie),
       
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
    <form onSubmit={handleSubmit}>
      <div className="form-input">

        <TextField 
          type="text" id="standard-basic" label="Name" variant="standard" 
            name='name'
            defaultValue={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.name && errors.name}
            helperText={touched.name && errors.name ? errors.name : null}
          />
      </div>
      <div className="form-input">

        <TextField
          type="text" id="standard-basic" label="Image" variant="standard" 
          name='image'
          defaultValue={values.image}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.image && errors.image}
            helperText={touched.image && errors.image ? errors.image : null}
          />
        {touched.image && errors.image ? errors.image : null}
      </div>
      <div className="form-input">
    
          <TextField 
        type="text" id="standard-basic" label="Summary" variant="standard" 
        name='description'
        defaultValue={values.description}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.description && errors.description}
            helperText={touched.description && errors.description ? errors.description : null}
        />
        {touched.description && errors.description ? errors.description : null}
      </div>
          
      <div className="form-input">

        <TextField id="standard-basic" label="Rating" variant="standard" min={1}
          max={10}
          type="number"
          name='rating'
          defaultValue={values.rating}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.rating && errors.rating}
            helperText={touched.rating && errors.rating ? errors.rating : null}
          />
          {touched.rating && errors.rating ? errors.rating : null}
      </div>

      <div className="form-input">

        <TextField 
          type="text" id="standard-basic" label="Video" variant="standard" 
          name='video'
          defaultValue={values.video}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.video && errors.video}
            helperText={touched.video && errors.video ? errors.video : null}
          />
          {touched.video && errors.video ? errors.video : null}
      </div>

      <Button  variant='outlined' color='success' type='submit'>Save Edit</Button>
    </form>
  </div>
  );
}