import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import { useFormik, yupToFormErrors } from "formik";
import * as yup from 'yup';
import {API} from './global';

export function SignUpPage() {
  return (
    <div className='sign-up-page'>
      <SignUpForm />
    </div>
  );
}


const userValidationSchema = yup.object({
  username: yup.string().required('This field is required.'),
  password: yup.string().required().min(8, 'Password needs to be at least 8 characters')
})


function SignUpForm() {


  const {handleSubmit, handleChange, handleBlur, values, errors, touched} = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: userValidationSchema,
    onSubmit: (newUser) => {
      console.log('New User', newUser);
      addUser(newUser);

    }
  });

  const addUser = (newUser) => {
   fetch(`${API}/users/signup`, {
    method: 'POST',
    body: JSON.stringify(newUser),
    headers: {
      "Content-Type": "application/json"
    }
   })
   .then(response => response.json())
   .then(data => console.log('New user created', data))
   .then(() => alert('Account Created Continue to Login'))
   .catch((error) => {
    console.log(error);
    alert('Account already exists! Login with credentials')
   })
  }


  return (
    <div className='sign-up-space'>
      <form onSubmit={handleSubmit}>
      <div className='sign-up-area'>
      <TextField 
            type="text" id="standard-basic" label="Username" variant="standard" 
            name="username" value={values.username} onChange={handleChange} onBlur={handleBlur}/>
      
      {touched.username && errors.username ? errors.username : null}      
      
      <TextField 
            type="text" id="standard-basic" label="Password" variant="standard" 
            name="password" value={values.password} onChange={handleChange} onBlur={handleBlur}/>
      
      {touched.password && errors.password ? errors.password : null}      
      <Button type='submit' color='success' variant='outlined'>Sign up</Button>
      </div>
      </form>
    </div>
  );
}
