import { useState } from "react";
import MovieCard from "./MovieCard";
import ActionAreaCard from "./MaterialCard";
import { Grid } from "@mui/material";

export default function SearchMovies(){

    const [movieName, setMovieName] = useState("");
    const [movies, setMovies] = useState([]);

    function fetchMovies(event){
        event.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=87d4b2a3008e4db585a5ebc1b8975625&include_adult=false&language=en-US&page=1`;
        
        fetch(url)
        .then(res => res.json())
        .then(data => setMovies(data.results));
        
    }

    function handleInput(event){
        console.log(event.target.value);
        setMovieName(event.target.value);
    }

    //https://www.themoviedb.org/t/p/w220_and_h330_face/

    return(
        <div>
            <h3>Enter the movie name</h3>
            <form classname = "form" onSubmit={fetchMovies}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input className="input" type = "text" name = "query" placeholder="Movie Name" value = {movieName} onChange={handleInput} />
                <button classname = "button" type="submit">Search</button>
            </form>

            <Grid container columnGap={4} rowGap={2}>
                {movies.map(movie =>
                    <ActionAreaCard data = {movie} key = {movie.id}></ActionAreaCard>
                    // <MovieCard data = {movie} key = {movie.id}/>
                )}
            </Grid>

        </div>
    )
}