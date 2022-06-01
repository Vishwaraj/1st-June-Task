
import './App.css';

function App() {
  return (
    <div>
 <MoviesHeader />
   <div className="movie-list">


    {moviesArr.map((movie) => {
      return(<Movie name={movie.name} image={movie.image} rating={movie.rating} description={movie.description} />);
    })}

   </div>
    </div>
   
  );
}

export default App;

function MoviesHeader() {
  return (
    <div className="movies-header">
      <h1>MoviesDB</h1>
    </div>
  )
}

let moviesArr = [
 
  {
    name: 'Oldboy',
    image: 'https://m.media-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_FMjpg_UX1000_.jpg',
    rating: 8.4,
    description: 'A man, held captive for no apparent reason for years, is given a cell phone, money and expensive clothes and released. Unless he finds out the identity of his captor, an even worse fate awaits him.'
  },
  {
    name: 'Parasite',
    image: 'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UY1200_CR90,0,630,1200_AL_.jpg',
    rating: 8.5,
    description: 'The struggling Kim family sees an opportunity when the son starts working for the wealthy Park family. Soon, all of them find a way to work within the same household and start living a parasitic life.'
  },
  {
    name: 'Memories of Murder',
    image: 'https://m.media-amazon.com/images/M/MV5BOGViNTg4YTktYTQ2Ni00MTU0LTk2NWUtMTI4OTc1YTM0NzQ2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg',
    rating: 8.1,
    description: 'A big-city detective helps two inept small-town cops investigate a serial killer.'
  },
  {
    name: 'Mulholland Drive',
    image: 'https://m.media-amazon.com/images/M/MV5BYWEyYjhjZmItNDJjYy00YzZiLThmMzAtNzAyOWMyNzA3N2RiXkEyXkFqcGdeQXVyODY4MjYwMDU@._V1_.jpg',
    rating: 7.9,
    description: 'Rita, a dark-haired amnesiac, and Betty, a perky blonde actress, team up to find clues related to Ritas accident and ascertain her true identity.'
  },
  {
    name: 'The Departed',
    image: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/95e48af6a709c401a3d04171e704832263be6d48d10e7450a98328a7475cbe37._RI_V_TTW_.jpg',
    rating: 8.5,
    description: 'An undercover agent and a spy constantly try to counter-attack each other in order to save themselves from being exposed in front of the authorities. Meanwhile, both try to infiltrate an Irish gang.'
  },
  {
    name: 'Joint Security Area',
    image: 'https://m.media-amazon.com/images/M/MV5BMTI1NDA4NTMyN15BMl5BanBnXkFtZTYwNTA2ODc5._V1_FMjpg_UX1000_.jpg',
    rating: 7.8,
    description: 'Two North Korean soldiers are killed in the border area between North and South Korea, prompting an investigation by a neutral body. Sgt. Lee Soo-hyeok (Lee Byung-hun) is the shooter, but lead investigator Maj. Sophie E. Jean (Lee Young-ae), a Swiss-Korean woman, receives differing accounts from the two sides. Lee claims he fired in self-defense after getting wounded, while a North Korean survivor says it was a premeditated attack -- leaving Jean with her work cut out for her.'
  }

];



function Movie(props) {
  return (
    <div className='movie-card'>
    <img alt='some-movie' src={props.image}></img>
    
    <div className='title-rating'>
    <h3>{props.name}</h3>
    <p>⭐{props.rating}</p>
    </div>
    
    <p>{props.description}</p>
    </div>
  );
}
