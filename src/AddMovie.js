import { useState } from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from 'yup';
import {API} from './global';



// add movies function

const movieValidationSchema = yup.object({
  name: yup.string().required('A Movie always has name'),
  image: yup.string().required().min(10, 'Check your image link'),
  rating: yup.number().min(1, 'Wow this must be a boring movie, if not correct this.').max(10, 'I am going to watch it tonight!').required(),
  description: yup.string().required().min(30, 'Need a bigger summary'),
  video: yup.string().required().min(10, 'please enter the embeded url')
});




export function AddMovie({ movie, setMovie }) {
  // const [movieName, setMovieName] = useState("");
  // const [image, setImage] = useState("");
  // const [summary, setSummary] = useState("");
  // const [rating, setRating] = useState(0);
  // const [video, setVideo] = useState("");

  const navigate = useNavigate();



  const {handleSubmit, handleBlur, handleChange, values, errors, touched} = useFormik({
    initialValues: {
      name: '',
      image: '',
      rating: 0,
      description: '',
      video: ''
    },
    validationSchema : movieValidationSchema,
    onSubmit: (newMovie) => {
      console.log('onSubmit', newMovie);
      submitMovie(newMovie);
    }
  });

  const submitMovie = (newMovie) => {
    // event.preventDefault();
  
    // let newMovie = {
    //   name: movieName,
    //   image: image,
    //   rating: +rating,
    //   description: summary,
    //   video: video
    // };

    const token = window.localStorage.getItem('token');
  
    fetch(`${API}/movies`, {
      method: "POST",
       
      body: JSON.stringify(newMovie),
       
      headers: {
          "Content-Type": "application/json",
          "x-auth-token": token
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

                      {/* name input */}
          <TextField 
            type="text" id="standard-basic" label="Name" variant="standard" 
            name='name'
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}

            />
          {touched.name && errors.name ? errors.name : null}
        </div>
        <div className="form-input">
                     {/* image input */}
          <TextField 
            type="text" id="standard-basic" label="Image" variant="standard" 
            name='image'
            value={values.image}
            onChange={handleChange}
            onBlur={handleBlur}

            />
        {touched.image && errors.image ? errors.image : null}
        </div>
        <div className="form-input">
                        {/* summary input */}
            <TextField multiline 
          type="text" id="standard-basic" label="Summary" variant="standard"
          name='description'
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
           />
            {touched.description && errors.description ? errors.description : null}
        </div>
            
        <div className="form-input">
                         {/* rating input */}
          <TextField id="standard-basic" label="Rating" variant="standard" min={1}
            max={10}
       
            type="number"
            name='rating'
            value={values.rating}
            onChange={handleChange}
            onBlur={handleBlur}

            />
             {touched.number && errors.number ? errors.number : null}
        </div>

        <div className="form-input">
                           {/* video input */}
          <TextField 
            type="text" id="standard-basic" label="Video" variant="standard" 
            name='video'
            value={values.video}
            onChange={handleChange}
            onBlur={handleBlur}

            />

         {touched.video && errors.video ? errors.video : null} 

        </div>

        <Button type='submit' variant='outlined'>Add Movie</Button>
      </form>
    </div>
  );
}



