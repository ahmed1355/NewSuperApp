import React, { useEffect, useState } from "react";
import "./Movie_Page.css";
import MovieGenreContainer from "../components/Movie_genre/Movie_genre";
import superApp from "../assets/images/superApp.png";
import profile from "../../src/assets/images/smallProfile.png";
import { useNavigate } from "react-router-dom";

function Movie_Page() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedArray = JSON.parse(localStorage.getItem("selectedCards"));
    if (storedArray) {
      setMovies(storedArray);
    }
  }, []);

  const toMoviePage = () => {
    navigate("/profile");
  };

  return (
    <div className="parent__movie">
      <div className="top">
        <img src={superApp} alt="superApp" />
        <img
          src={profile}
          alt="display_picture"
          id="profile__icon"
          onClick={toMoviePage}
        />
      </div>
      <div className="movie__text">Entertainment according to your choice</div>
      <div className="container__parent">
        {movies.map((movie, index) => {
          return <MovieGenreContainer key={index} title={movie} />;
        })}
      </div>
    </div>
  );
}

export default Movie_Page;
