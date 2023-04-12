import React ,{useContext} from "react";
import { Link } from "react-router-dom";
import { globalData } from "../../App";
import "./header.css";

const Header = () => {
  
  const context = useContext(globalData);

  return (
    <>
      <div className="header">
        <div className="headerLeft">
          <Link to="/" className="headerIcon">
//             Movie App
             <img src="./logoImg.png" alt="" />
          </Link>
          <div className="navbar">
            <Link to="/movies/popular">Popular</Link>
            <Link to="/movies/top_rated">Top Rated</Link>
            <Link to="/movies/upcoming">Upcoming</Link>
          </div>
          <Link to="search" className="search">Search</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
