import { useEffect, useRef, useState } from "react";
import "./Movies.css";
import { Link } from "react-router-dom";
const Movielist = ({ title, lan, category }) => {
  const [movies, setMovies] = useState([]);
  const movielistRef = useRef();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWNkM2FmZjk1MTFmYmVmMTEwNWUyNWY5MWFlNzJjZiIsInN1YiI6IjY2MjBmODEyYWUzODQzMDE1NTI4ZDYwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XHjXsFcjwEpEoB6jU31F1weUcGBlgUQ4KMKNIaJD2p4",
    },
  };
  useEffect(() => {
    async function fetData() {
      try {
        let response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_original_language=${lan}&with_genres=${category}`,
          options
        );
        let resData = await response.json();
        setMovies(resData.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetData();
    movielistRef.current.addEventListener("wheel", (e) => {
      e.preventDefault();
      movielistRef.current.scrollLeft += e.deltaY;
    });
  }, []);
  return (
    <div className="col">
      <h4>{title}</h4>
      <div className="movies-container" ref={movielistRef}>
        {movies.map((datas) => {
          return (
            <Link
              key={datas.id}
              state={{ datas }}
              to={"/Details"}
              className="movies-col"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${datas?.poster_path})`,
              }}
            ></Link>
          );
        })}
      </div>
    </div>
  );
};

export default Movielist;
