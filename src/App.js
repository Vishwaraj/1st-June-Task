import { useState, createContext, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { AddMovie } from "./AddMovie";
import "./App.css";
import { MovieDetails } from "./MovieDetails";
import { MovieList } from "./MovieList";
import { MoviesHeader } from "./MoviesHeader";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {TicTacToe} from './TicTacToe.js'
import {EditMovie} from './EditMovie.js'



function App() {
  // const [movie, setMovie] = useState(moviesArr);

  const [movie, setMovie] = useState([]);

  const [theme, setTheme] = useState('dark');

  const darkTheme = createTheme({
    palette: {
      mode: theme,
    },
  });

 



  return (

    <ThemeProvider theme={darkTheme}>
    <Paper elevation={0} style={{minHeight : '100vh'}}>

    <div>
      <MoviesHeader theme={theme} setTheme={setTheme} />

      <Routes>
        <Route
          path="/movies"
          element={<MovieList setMovie={setMovie} movie={movie} deleteMovie={deleteMovie}/>}
        />
        <Route
          path="/add-movie"
          element={<AddMovie movie={movie} setMovie={setMovie} />}
        />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path ='/tic-tac-toe' element={<TicTacToe/>} />
        <Route path='/edit-movie/:id' element={<EditMovie />} />
      </Routes>

    
    </div>

    </Paper>
    </ThemeProvider>
  );
}

export default App;

let moviesArr = [
  {
    id:'100',
    name: "Oldboy",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_FMjpg_UX1000_.jpg",
    rating: 8.4,
    description:
      "A man, held captive for no apparent reason for years, is given a cell phone, money and expensive clothes and released. Unless he finds out the identity of his captor, an even worse fate awaits him.",
    video: "https://www.youtube.com/embed/2HkjrJ6IK5E",
  },
  {
    id:'101',
    name: "Parasite",
    image:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
    rating: 8.5,
    description:
      "The struggling Kim family sees an opportunity when the son starts working for the wealthy Park family. Soon, all of them find a way to work within the same household and start living a parasitic life.",
    video: "https://www.youtube.com/embed/SEUXfv87Wpk",
  },
  {
    id:'102',
    name: "Memories of Murder",
    image:
      "https://m.media-amazon.com/images/M/MV5BOGViNTg4YTktYTQ2Ni00MTU0LTk2NWUtMTI4OTc1YTM0NzQ2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    rating: 8.1,
    description:
      "A big-city detective helps two inept small-town cops investigate a serial killer.",
    video: "https://www.youtube.com/embed/0n_HQwQU8ls",
  },
  {
    id:'103',
    name: "Mulholland Drive",
    image:
      "https://m.media-amazon.com/images/M/MV5BYWEyYjhjZmItNDJjYy00YzZiLThmMzAtNzAyOWMyNzA3N2RiXkEyXkFqcGdeQXVyODY4MjYwMDU@._V1_.jpg",
    rating: 7.9,
    description:
      "Rita, a dark-haired amnesiac, and Betty, a perky blonde actress, team up to find clues related to Ritas accident and ascertain her true identity.",
    video: "https://www.youtube.com/embed/2HkjrJ6IK5E",
  },
  {
    id:'104',
    name: "The Departed",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/95e48af6a709c401a3d04171e704832263be6d48d10e7450a98328a7475cbe37._RI_V_TTW_.jpg",
    rating: 8.5,
    description:
      "An undercover agent and a spy constantly try to counter-attack each other in order to save themselves from being exposed in front of the authorities. Meanwhile, both try to infiltrate an Irish gang.",
    video: "https://www.youtube.com/embed/2HkjrJ6IK5E",
  },
  {
    id:'105',
    name: "Joint Security Area",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTI1NDA4NTMyN15BMl5BanBnXkFtZTYwNTA2ODc5._V1_FMjpg_UX1000_.jpg",
    rating: 7.8,
    description:
      "Two North Korean soldiers are killed in the border area between North and South Korea, prompting an investigation by a neutral body. Sgt. Lee Soo-hyeok (Lee Byung-hun) is the shooter, but lead investigator Maj. Sophie E. Jean (Lee Young-ae), a Swiss-Korean woman, receives differing accounts from the two sides. Lee claims he fired in self-defense after getting wounded, while a North Korean survivor says it was a premeditated attack -- leaving Jean with her work cut out for her.",
    video: "https://www.youtube.com/embed/2HkjrJ6IK5E",
  },
];

function deleteMovie(id, setMovie) {
  moviesArr = moviesArr.filter((movie) => {
    return movie.id !== id;
  });
  setMovie(moviesArr);
}


