import React from "react";
import "./Movie_name.css";
import cross from "../../assets/images/cross.png";

function Movie_name({ title, onClick }) {
  return (
    <div className="movie-name">
      <div className="title">{title}</div>
      <img src={cross} alt="cross" id="cross-icon" onClick={onClick} />
    </div>
  );
}

export default Movie_name;