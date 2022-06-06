import { useState } from 'react';

export function Movie(props) {

  const styles = {
    color: props.rating > 8 ? 'green' : 'yellow'
  };

  const [click, setClick] = useState(true);

  const hide = {
    display: click ? 'block' : 'none'
  };

  return (
    <div className='movie-card'>
      <img alt='some-movie' src={props.image}></img>

      <div className='title-rating'>
        <h3>{props.name}</h3>
        <p style={styles}>⭐{props.rating}</p>
      </div>

      <button onClick={() => setClick(!click)}>Toggle Summary</button>

      <p style={hide}>{props.description}</p>
    </div>



  );
}
