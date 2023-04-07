import React, { useContext , useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { globalData } from "../../App";
import MovieCard from "../moviecard/MovieCard";
import './movielist.css'
const Trending = ({ allMovies }) => {
    const [data, setData] = useState([])
    useEffect(() => {

        const trendingData = async () => {
            const res = await fetch('https://api.themoviedb.org/3/trending/all/week?api_key=d09a43e3fbd3d04d2631f0551bdedc80')
            // console.log(res);
            const data = await res.json()
            // console.log(data.results)
            setData(data.results)
        }
        trendingData()
    }, [])
  const context = useContext(globalData);
//   const { category } = useParams();
  return (
    <>
      <div className="movielist" >
        <div className="trendlist">
          <MovieCard
            allMovies={data}
          />
        </div>
      </div>
    </>
  );
};

export default Trending;
