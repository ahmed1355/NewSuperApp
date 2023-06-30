import React from "react";
import image from "./assets/image 14.png";
import styles from "./userprofile.module.css";
function Userprofile({ selectedGenres }) {
  const info = JSON.parse(window.localStorage.getItem("infodata"));
  const genre = JSON.parse(window.localStorage.getItem("genres"));
  return (
    <>
      <div className={styles.profile}>
        <img src={image} className={styles.car_img} />

        <div className={styles.textwrap}>
          <p >{info.name}</p>
          <p >{info.mail}</p>
          <p style={{ fontSize: "3rem", fontWeight: "bold" }}>
            {info.username}
          </p>

          <div className={styles.selectedGenreWrapper}>
            {genre &&
              genre.map((genre) => (
                <div key={genre.id} className={styles.selectedGenres}>
                  <p>{genre.id}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Userprofile;
