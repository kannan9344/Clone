import { useEffect, useState } from 'react'
import "./Categories.css";
import CategoryData from "./category.js";
import { Link } from 'react-router-dom';
const Categories = () => {
  const [categoryMovie,setCategoryMovie]=useState([]);
  const [category,setCategory]=useState(53);
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
          `https://api.themoviedb.org/3/discover/movie?&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_original_language=en&with_genres=${category}`,
          options
        );
        let resData = await response.json();
        setCategoryMovie(resData.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetData();
  }, [category]);
  return (
    <div className='category-container'>
      <div className="categories">
        {CategoryData.map((item,index)=>{
          return<div key={index} onClick={()=>setCategory(item.id)}>{item.category}</div>
        })}
      </div>
      <div className="category-movies">
        {categoryMovie.map((datas)=>{
          return  <Link key={datas.id} to={"/Details"} state={{datas}} className="movie-col" style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${datas?.poster_path})`,
          }}>
    </Link>
        })}
       
      </div>
    </div>
  )
}

export default Categories