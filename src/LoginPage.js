import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from 'yup';
import {API} from './global';




export function LoginPage() {
  return (
    <div className='login-form-page'>
      <LoginForm />
    </div>
  );
}

const userValidationSchema = yup.object({
  username: yup.string().required('This field is required'),
  password: yup.string().required().min(8, 'Password needs to be atleast 8 characters')
})







function LoginForm() {

  const {handleChange, handleBlur, handleSubmit, values, errors, touched} = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: userValidationSchema,
    onSubmit: (user) => {
      console.log('This is the user', user)
      loginUser(user)
    }
  });

  const navigate = useNavigate();

  const loginUser = (user) => {
    fetch(`${API}/users/login`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(data => {console.log('user login',data); window.localStorage.setItem('token', data.token);
    if(!data.token) {
      alert('Invalid Credentials')
    } else {
      alert('Login Successful')
      setTimeout(() => {
        navigate('/movies')
      }, 2000)
    }
  })
  .catch((err) => console.log(err))

    
  }


  //ASYNC AWAIT APPROACH
  // const loginUser = async (user) => {
    
  //   const response = await  fetch(`${API}/users/login`, {
  //     method: 'POST',
  //     body: JSON.stringify(user),
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   });

  //   const data = await response.json();
 
    
  // }

  




  return (
    <div className='login-form-space'>
      <form onSubmit={handleSubmit}>
      <div className='login-form-area'>
      <TextField 
            type="text" id="standard-basic" label="Username" variant="standard" 
            name='username' value={values.username} onChange={handleChange} onBlur={handleBlur} />
      <TextField 
            type="text" id="standard-basic" label="Password" variant="standard" 
            name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} />
      <Button type='submit' variant='outlined'>Log in</Button>
      </div>
 
      </form>
    </div>
  );
}


//In react following code is used , write the following code.
// localStorage.setItem('token', the token that is generated here)
// when making api calls that require token, write the following code.
// localStorage.getItem('token');
// when logging out, to delete the token from local memory write the following code.
// localStorage.removeItem('token');