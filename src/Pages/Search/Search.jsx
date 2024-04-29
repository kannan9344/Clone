import { useEffect, useRef, useState } from "react";
import "./Search.css";
import { Link } from "react-router-dom";
const Search = () => {
  const [item, setItem] = useState("");
  const [searchitem, setSearchitem] = useState([]);
  const movieRef = useRef();
  const inputRef = useRef();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWNkM2FmZjk1MTFmYmVmMTEwNWUyNWY5MWFlNzJjZiIsInN1YiI6IjY2MjBmODEyYWUzODQzMDE1NTI4ZDYwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XHjXsFcjwEpEoB6jU31F1weUcGBlgUQ4KMKNIaJD2p4",
    },
  };
  const searchMovies = (e) => {
    if (e.key == "Enter") {
      setItem(inputRef.current.value);
    }
  };
  useEffect(() => {
    async function fetSearch() {
      try {
        let response = await fetch(
          ` https://api.themoviedb.org/3/search/movie?query=${item}&language=en-US&page=1`,
          options
        );
        let resData = await response.json();
        setSearchitem(resData.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetSearch();
    movieRef.current.addEventListener("wheel", (e) => {
      e.preventDefault();
      movieRef.current.scrollLeft += e.deltaY;
    });
  }, [item]);
  return (
    <div className="search-container">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search Movies here"
          ref={inputRef}
          onKeyDown={searchMovies}
        />
        <div
          className="search-btn"
          onClick={() => setItem(inputRef.current.value)}
        >
          Search Movies
        </div>
      </div>
      <div className="search-movies" ref={movieRef}>
        {searchitem.map((datas) => {
          return (
            <Link
              className="movie"
              to={"/Details"}
              key={datas.id}
              state={{ datas }}
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

export default Search;
