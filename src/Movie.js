import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Badge from '@mui/material/Badge';


// useNavigate

export function Movie(props) {

  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  const styles = {
    color: props.rating > 8 ? 'green' : 'gold'
  };

  const [click, setClick] = useState(true);

  const hide = {
    display: click ? 'block' : 'none'
  };


  const navigate = useNavigate();

  return (
    <div className='movie-card'>
      <img alt='some-movie' src={props.image}></img>

      <div className='title-rating'> 
      <h3>{props.name}
      <KeyboardArrowDownIcon className='info-more' onClick={() => setClick(!click)} />  
      <InfoIcon className='info-more' onClick={() => navigate(`/movies/${props.id}`)} color='primary' fontSize='small' />
      </h3>
      <p style={styles}>⭐{props.rating}</p>
      
      </div>
      
      <p className="movie-description" style={hide}>{props.description}</p>
   
      <div className="counter-like-dislike">
      {/* <button onClick={() => setLike(like + 1)}>👍 {like}</button>
      <button onClick={() => setDislike(dislike + 1)}>👎 {dislike}</button> */}
      
      
      <Badge fontSize='small' badgeContent={like} color="primary">
      <button className="like-dislike" onClick={() => setLike(like + 1)}>👍</button>
      </Badge>

      <Badge fontSize='small' badgeContent={dislike} color="error">
      <button className="like-dislike" onClick={() => setDislike(dislike + 1)}>👎</button>
      </Badge>
    </div>

    </div>



  );
}
