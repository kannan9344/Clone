import { useEffect, useRef, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
const HomeList = ({ title, category }) => {
  const [data, setData] = useState([]);
  const listRef = useRef();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWNkM2FmZjk1MTFmYmVmMTEwNWUyNWY5MWFlNzJjZiIsInN1YiI6IjY2MjBmODEyYWUzODQzMDE1NTI4ZDYwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XHjXsFcjwEpEoB6jU31F1weUcGBlgUQ4KMKNIaJD2p4",
    },
  };
  // https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=${category}
  // https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1
  useEffect(() => {
    async function fetData() {
      try {
        let response = await fetch(
          `https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=${category}`,
          options
        );
        let resData = await response.json();
        setData(resData.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetData();
    listRef.current.addEventListener("wheel", (e) => {
      e.preventDefault();
      listRef.current.scrollLeft += e.deltaY;
    });
  }, []);

  return (
    <div className="col">
      <h4>{title}</h4>
      <div className="movies-container" ref={listRef}>
        {data.map((datas) => {
          return (
            <Link
              key={datas.id}
              className="movie-col"
              state={{datas}}
              to={"/Details"}
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
export default HomeList;
