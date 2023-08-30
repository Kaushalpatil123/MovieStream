import React from "react";
import Trailer from "../Components/Trailer";
import Moviescomponent from "../Components/Moviescomponent";
import Topratedmovies from "../Components/Topratedmovies";
import Upcommingmovies from "../Components/Upcommingmovies";
import Footer from "../Components/Footer";
const Home = () => {
  return (
    <div>
      <Trailer />
      <Moviescomponent />
      <Topratedmovies />
      <Upcommingmovies />
      <Footer />
    </div>
  );
};

export default Home;
