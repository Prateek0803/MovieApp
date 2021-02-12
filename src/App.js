import React,{useState,useEffect} from 'react'
import './App.css';
import Movies from './components/Movies'
const Featured_API=`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1` 



function App() {

  const [movies,setMovies] = useState([]);
  const [query,setQuery] = useState('');

  const getMoviesList = async()=>{
    const moviesList = await fetch(Featured_API);
    const moviesListJson = await moviesList.json();
    setMovies(moviesListJson.results)
  }

  useEffect(()=>{
      getMoviesList();
  },[])

  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
  const searchMovie = async()=>{
      const searchList = await fetch(SEARCH_API);
      const searchListJson = await searchList.json();
      setMovies(searchListJson.results)
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(query){
        searchMovie();
        setQuery('')
    }else{
      alert('Obviously we cannot search blank field :)')
    }

      
  }
  
  return (
    <div className="App">
      <div className="header">
        <div className="logo">
          <h1>Movie App</h1>
        </div>
        <form className="searchForm" onSubmit={handleSubmit}>
          <input 
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
      </div>
      <div className="movieApp">
         {movies.map((movie) =>(
          <Movies {...movie} key={movie.id} />
        ))}
      </div>
       
    </div>
  );
}

export default App;
