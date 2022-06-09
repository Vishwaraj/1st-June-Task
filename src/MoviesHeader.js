import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';



export function MoviesHeader() {
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
    <AppBar>
      <div className='appbar-header'>
      <h1>MoviesDB</h1>
      <div className='header-links'>
      <h3><Link to='/'>Home</Link></h3>
      <h3><Link to='/movies'>Movies</Link></h3>
      <h3><Link to="add-movie">Add Movies</Link></h3>
      </div>
      </div>
      
    </AppBar>
    
    
  );
}
