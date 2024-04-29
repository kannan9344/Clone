import { Route, Routes } from "react-router-dom";
import Search from "./Pages/Search/Search";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Movies from "./Pages/Movies/Movies.jsx";
import Categories from "./Pages/Categories/Categories.jsx";
import Details from "./Components/Details/Details.jsx";

const App = () => {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Movie" element={<Movies />} />
          <Route path="/Category" element={<Categories />} />
          <Route path="/Details" element={<Details />} />
        </Routes>
    </>
  );
};

export default App;
