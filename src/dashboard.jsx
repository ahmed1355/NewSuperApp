import React from "react";
import UserProfile from "./userprofile";
import Weather from "./weather";
import News from "./news";
import Styles from "./dashboard.module.css";
import { useLocation } from "react-router-dom";


function Dashboard({ location }) {
  const Location = useLocation();  
  const selectedGenres = Location.state?.selectedGenres || [];
  return (
    <>
      <div className={Styles.main}>
        <div>
        <UserProfile selectedGenres={selectedGenres} />
          <Weather />
        </div>
        <News />
      </div>
    </>
  );
}

export default Dashboard;
