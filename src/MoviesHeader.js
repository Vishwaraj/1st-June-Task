import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import {useContext} from 'react';
import WbSunnyIcon from '@mui/icons-material/WbSunny';



export function MoviesHeader({theme, setTheme}) {

const navigate = useNavigate();

const token = window.localStorage.getItem('token');

  return (

    <div>

    <AppBar>
  <Toolbar>
  <div className='toolbar-header'>
  <Button color='inherit' onClick={() => {navigate('/')}}>Home</Button>
  <Button color='inherit' onClick={() => {navigate('/movies')}}>Movies</Button>
  <Button color='inherit' onClick={() => {navigate('/add-movie')}}>Add Movies</Button>
  <Button color='inherit' onClick={() => {setTheme(theme === 'dark' ? 'light' : 'dark')}}>{theme === 'dark' ? '☀ Light Mode' : '🌙 Dark Mode'}</Button>
  <Button color='inherit' className='mode-button' onClick={() => {navigate('/tic-tac-toe')}} >Tic Tac Toe</Button>
  {token 
  ?
  <Button color='inherit' onClick={() => {navigate('/'); userLogout()}}>Log out</Button>
  :
  <>
  <Button color='inherit' onClick={() => {navigate('/users/login')}}>Log in</Button>
  <Button color='inherit' onClick={() => {navigate('/users/signup')}}>Sign up</Button>
  </>
  }


  </div>

  </Toolbar>
  </AppBar>
  
    </div>
   
  );
}



function userLogout() {
  window.localStorage.removeItem('token');
}