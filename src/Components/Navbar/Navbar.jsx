import React, { useState } from "react";
import Logo from "/src/assets/netflix_logo.png"
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="navbar">
      <nav>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <ul className={toggle?"active":""}>
          <Link className="list" to={"/"}>Home</Link>
          <Link className="list" to={"/Search"}>Search</Link>
          <Link className="list" to={"/Movie"}>Movies</Link>
          <Link className="list" to={"/Category"}>Categories</Link>
      </ul>
      <i className="fa-solid fa-bars-staggered" onClick={()=>setToggle(!toggle)} ></i>
      </nav>
     
    </header>
  );
};

export default Navbar;
