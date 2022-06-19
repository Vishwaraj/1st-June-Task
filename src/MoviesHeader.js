import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import {useContext} from 'react';
import WbSunnyIcon from '@mui/icons-material/WbSunny';



export function MoviesHeader({theme, setTheme}) {

const navigate = useNavigate();



  return (
    // <div>
    //   <div className="movies-header">
    //   <h1>MoviesDB</h1>
    //   <div className='header-links'>
    //   <h3><Link to='/'>Home</Link></h3>
    //   <h3><Link to='/movies'>Movies</Link></h3>
    //   <h3><Link to="add-movie">Add Movies</Link></h3>
    //   </div>
    // </div>
    // </div>
    <div>
 <AppBar>
      <div className='appbar-header'>
      <h1>MoviesDB</h1>
      <div className='header-links'>
      <h3><Link to='/'>Home</Link></h3>
      <h3><Link to='/movies'>Movies</Link></h3>
      <h3><Link to="/add-movie">Add Movies</Link></h3>
      </div>
      </div>
    </AppBar>
    



    <AppBar>
  <Toolbar>
  <div className='toolbar-header'>
  <Button color='inherit' onClick={() => {navigate('/')}}>Home</Button>
  <Button color='inherit' onClick={() => {navigate('/movies')}}>Movies</Button>
  <Button color='inherit' onClick={() => {navigate('/add-movie')}}>Add Movies</Button>
  <Button color='inherit' onClick={() => {setTheme(theme === 'dark' ? 'light' : 'dark')}}>{theme === 'dark' ? '☀ Light Mode' : '🌙 Dark Mode'}</Button>
  <Button color='inherit' className='mode-button' onClick={() => {navigate('/tic-tac-toe')}} >Tic Tac Toe</Button>
  </div>

  </Toolbar>
  </AppBar>
  
    </div>
   



  



  );
}
