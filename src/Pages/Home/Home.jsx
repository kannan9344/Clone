
import "./Home.css";
import HomeList from "./HomeList";
const Home = () => {
  return (
    <div className="home-container">
      <div
        className="home-row"
        style={{
          backgroundImage: "url(https://image.tmdb.org/t/p/original/nb3xI8XI3w4pMVZ38VijbsyBqP4.jpg)",
        }}
      ></div>
      <div className="home-columns">
        <div className="home-col">
          <h1>Oppenheimer</h1>
          <div className="date">2023-07-19</div>
          <div className="genres">Drama ,History</div>
          <p>To take down South Boston's Irish Mafia, the police send in one of their own to infiltrate the underworld, not realizing the syndicate has done likewise. While an undercover cop curries favor with the mob kingpin, a career criminal rises through the police ranks. But both sides soon discover there's a mole among them.</p>
          <div className="btn">
              <i className="fa-solid fa-play"></i>
            </div>
        </div>
        <div className="home-col">
          <HomeList title={"Popular On Netflix"} category={2} />
          <HomeList title={"Blockbuster Movies"} category={3} />
          <HomeList title={"Only On Netflix"} category={4} />
          <HomeList title={"Top Rated"} category={5} />
        </div>
      </div>
    </div>
  );
};

export default Home;
