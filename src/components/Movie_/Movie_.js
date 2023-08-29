import React from "react";
import "./Movie_.css";

function Movie_({ title, image, color, onClick, isSelected }) {
  return (
    <div
      className={`box ${isSelected ? "selected" : ""}`}
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      <div className="box__title">{title}</div>
      <img src={image} alt="img" id="box__image" />
    </div>
  );
}

export default Movie_;