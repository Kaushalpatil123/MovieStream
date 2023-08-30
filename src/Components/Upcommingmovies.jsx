import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "../Style.css";
import { Link } from "react-router-dom";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const Upcommingmovies = () => {
  const [topratedmovie, setTopratedmovie] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=56c3ff8ffcdd2af0b4cd183447409fb2"
      )
      .then((response) => {
        setTopratedmovie(response.data.results);
      });
  }, []);

  return (
    <>
      <div className="main">
        <label htmlFor="Popular movie">upcomming Movies :-</label>
        <div className="row">
          {topratedmovie.map((value, index) => {
            return (
              <div className="mainitem">
                <Link>
                  <img
                    key={index}
                    src={API_IMG + value.poster_path}
                    alt="bvbv"
                  />
                  <p className="moviename" key={value.id}>
                    {value.title}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Upcommingmovies;
