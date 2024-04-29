
import "./Movies.css";

import Movielist from "./Movielist";

const Movies = () => {
  return (
    <div className="movie-container">
      <div
        className="movie-row"
        style={{
          backgroundImage: "url(https://image.tmdb.org/t/p/original/qrGtVFxaD8c7et0jUtaYhyTzzPg.jpg)",
        }}
      ></div>
      <div className="movie-columns">
        <div className="movie-col">
          <h1>Godzilla x Kong <br /> The New Empire</h1>
          <div className="date">2024-03-27</div>
          <div className="genres">Action ,Science Fiction ,Adventure</div>
          <p>
          Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence  and our own.
          </p>
          <div className="btn">
            <i className="fa-solid fa-play"></i>
          </div>
        </div>
        <div className="movie-col">
        <Movielist title={"Science Fiction"} lan={"en"} category={878} />
          <Movielist title={"Indian Movies"} lan={"ta"} category={10749} />
          <Movielist title={"Telugu Movies"} lan={"te"} category={10749} />
          <Movielist title={"Adventure"} lan={"en"} category={16} />
          <Movielist title={"Fantasy"} lan={"en"} category={14} />
          <Movielist title={"Thriller"} lan={"en"} category={53} />
        </div>
      </div>
    </div>
  );
};

export default Movies;
