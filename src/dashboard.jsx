import React from "react";
import UserProfile from "./userprofile";
import Weather from "./weather";
import News from "./news";
import Styles from "./dashboard.module.css";
import { useLocation } from "react-router-dom";
import Catstyles from "./category.module.css";
import { useNavigate } from "react-router-dom";
import Notes from './notes'
function Dashboard({ location }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/enter");
  };

  const Location = useLocation();
  const selectedGenres = Location.state?.selectedGenres || [];
  return (
    <>
      <div className={Styles.main}>
        <div>
          <UserProfile selectedGenres={selectedGenres} />
          <Weather />
        </div>
          <Notes/>
        <News />
      </div>
      <button className={Catstyles.signUpent} onClick={handleClick}>
        Next Page
      </button>
    </>
  );
}

export default Dashboard;
