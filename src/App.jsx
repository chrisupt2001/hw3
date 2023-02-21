import React from 'react';
import { useState, useEffect } from 'react'
import Movies from './components/Movies';
import SearchBar from './components/SearchBar';
import {movieData} from './utils/movies';


function App() {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [maxLength, setMaxLength] = useState('');

  useEffect(() => {
  
    console.log("useEffect called");

    setMovies(movieData.filter(movie => {
      return (movie.title.toUpperCase().includes(search.toUpperCase())) &&
         ([NaN,0].includes(parseInt(maxLength,10)) || parseInt(maxLength,10) >= movie.length )
     }));

  }, [search, maxLength]);

  const Ascend = () => {

    const moviesAscend = [...movies];

    moviesAscend.sort((firstMovie, secondMovie) => firstMovie.length - secondMovie.length);

     moviesAscend.forEach((e) => {
      console.log(`${e.title} ${e.length}`);
  });

     setMovies(moviesAscend);

}

  const Descend = () => {

    const moviesDescend = [...movies];

   moviesDescend.sort((firstMovie, secondMovie) => secondMovie.length - firstMovie.length);

    moviesDescend.forEach((e) => {
      console.log(`${e.title} ${e.length}`);
  });

    setMovies(moviesDescend);

  }

  return (
    <>
    
      {/* Header Bar for Searching */}
      <SearchBar 
        search={search} 
        setSearch={setSearch} 
        maxLength={maxLength} 
        setMaxLength={setMaxLength}
        Ascend={Ascend}
        Descend={Descend}
      />
      {/* Output the Movies */}
      <Movies movies={movies} />
    </>
  )
}

export default App
