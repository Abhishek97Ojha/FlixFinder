import React, { useContext, useState } from 'react'
import './search.css'
import { searchedMovies } from "../../functions/GetMovieList";
import { globalData } from "../../App";
import MovieList from "../../components/movieList/MovieList";
import { Link } from 'react-router-dom';

const Search = () => {
  const context = useContext(globalData);
  const [name, setName] = useState("")
  
  return (
    <>
    <div className='search'>
      <div className="input">
        <input type="text" placeholder='Search' value={name} onChange={(e) => {
              setName(e.target.value)
            }}/>
        <button onClick={() => {
                searchedMovies(name, context.setState, context);
                setName("")
                
            }}>Search</button>
            
      </div>
    </div>
    <div>
      <MovieList/>
    </div>
    </>
  )
}

export default Search