import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';



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
    <Card className='movie-card' sx={{height: 'min-content'}}>
      <img alt='some-movie' src={props.image}></img>


      <CardContent>
      <div className='title-rating'> 
      <h3>{props.name}

      <IconButton className='info-more' onClick={() => setClick(!click)} color='primary'>
      {click ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon  />}
      </IconButton>
       
      
      
      <IconButton className='info-more' onClick={() => navigate(`/movies/${props.id}`)} color='primary' >
      <InfoIcon fontSize='small' />
      </IconButton>
      
      </h3>
      <p style={styles}>⭐{props.rating}</p>
      
      </div>
      
      <p className="movie-description" style={hide}>{props.description}</p>
      </CardContent>
    
   
      <CardActions>
      <div className="counter-like-dislike">
      
      <IconButton size='small' color='primary' className="like-dislike" onClick={() => setLike(like + 1)} >
      <Badge fontSize='small' badgeContent={like} color="primary">
      👍
      </Badge>
      </IconButton>
            
      <IconButton size='small' color='primary' className="like-dislike" onClick={() => setDislike(dislike + 1)}>
      <Badge fontSize='small' badgeContent={dislike} color="error">
      👎
      </Badge>
      </IconButton>

    </div>

      </CardActions>

      
    </Card>



  );
}
