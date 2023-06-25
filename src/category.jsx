import React from "react";
import styles from "./category.module.css";
import action from "./assets/image 2.png";
import drama from "./assets/image 3.png";
import romance from "./assets/image 4.png";
import thriller from "./assets/image 6.png";
import western from "./assets/image 7.png";
import horror from "./assets/image 8.png";
import fantasy from "./assets/image 9.png";
import music from "./assets/image 10.png";
import fiction from "./assets/image 11.png";
import Block from "./block";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const genresData = [
  {
    id: "Action",
    color: "#FF5209",
    image: <img src={action} alt="Action" className={styles.img} />,
  },
  {
    id: "Drama",
    color: "#D7A4FF",
    image: <img src={drama} alt="Drama" className={styles.img} />,
  },
  {
    id: "Fantasy",
    color: "#FF4ADE",
    image: <img src={fantasy} alt="Fantasy" className={styles.img} />,
  },
  {
    id: "Fiction",
    color: "#6CD061",
    image: <img src={fiction} alt="Fiction" className={styles.img} />,
  },
  {
    id: "Horror",
    color: "#7358FF",
    image: <img src={horror} alt="Horror" className={styles.img} />,
  },
  {
    id: "Music",
    color: "#E61E32",
    image: <img src={music} alt="Music" className={styles.img} />,
  },
  {
    id: "Romance",
    color: "#11B800",
    image: <img src={romance} alt="Romance" className={styles.img} />,
  },
  {
    id: "Thriller",
    color: "#84C2FF",
    image: <img src={thriller} alt="Thriller" className={styles.img} />,
  },
  {
    id: "Western",
    color: "#912500",
    image: <img src={western} alt="Western" className={styles.img} />,
  },
];

function Category() {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [lengthError, setLengthError] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (selectedGenres.length < 3) {
      setLengthError(true);
    } else {
      setLengthError(false);
      window.localStorage.setItem(
        "genres",
        JSON.stringify([...selectedGenres])
      );
      navigate("/browse");
    }
  };
  return (
    <>
      <div className={styles.body}>
        <div className={styles.left}>
          <h2 className={styles.heading}>Super app</h2>
          <h2 className={styles.subHeading}>
            Choose your entertainment category
          </h2>
          <div style={{ marginTop: "10vh" }}>
            {lengthError && (
              <p className={styles.error}>Please choose at least 3</p>
            )}
            <div>
              {selectedGenres.map((genre) => (
                <span key={genre} className={styles.selectedGenre}>
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.right}>
          {genresData.map((data, value) => (
            <Block
              data={data}
              value={value}
              categories={selectedGenres}
              setCategories={setSelectedGenres}
            />
          ))}
          <button className={styles.signUp} onClick={handleSignUp}>
            Next Page
          </button>
        </div>
      </div>
    </>
  );
}

export default Category;
