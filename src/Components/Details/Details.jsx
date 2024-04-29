import React from "react";
import "./Details.css";
import { useLocation } from "react-router-dom";
const Details = () => {
  const { state } = useLocation();
  return (
    <div className="detail-container">
      <div className="row">
        <div className="col">
          <div
            className="image"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${state.datas?.poster_path})`,
            }}
          ></div>
        </div>
        <div className="col">
          <h2>{state.datas?.title}</h2>
          <div>
            <strong>Language :</strong>
            <div>{state.datas?.original_language}</div>
          </div>
          <div>
            <strong>IMDB_rate :</strong>
            <div>{state.datas?.vote_average}</div>
          </div>
          <p>{state.datas?.overview}</p>
          <div>
            <strong>Release_date :</strong>
            <div>{state.datas?.release_date}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
