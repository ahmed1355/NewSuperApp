import React, { useState, useEffect } from "react";
import "./News.css";
import axios from "axios";

function News() {
  const [news, setNews] = useState([]);
  const [date, setDate] = useState("00-00-0000");
  const [currTime, setCurrTime] = useState("00:00:00");

   useEffect(() => {
      const url =
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=31a3d45f60274211864d261cadcfaf7c";
      axios
        .get(url)
        .then((res) => setNews(res.data.articles[2]))
        .catch((error) => {
          // Handle the error here, e.g. show an error message to the user
          console.error("Error fetching news:", error);
        });
    }, []);

  useEffect(() => {
    const ddmmyyyy = new Date(news.publishedAt);
    let day = ddmmyyyy.getDate();
    let month = ddmmyyyy.getMonth();
    let year = ddmmyyyy.getFullYear();
    if (day < 10) day = `0${day}`;
    if (month < 10) month = `0${month}`;
    const dateFormated = `${day}-${month}-${year}`;
    setDate(dateFormated);
  }, [date, news.publishedAt]);

  useEffect(() => {
    const time = new Date(news.publishedAt);
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let tzone = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    if (hours < 10) hours = `0${hours}`;
    if (minutes < 10) minutes = `0${minutes}`;

    const timeFormated = `${hours}:${minutes}:${tzone}`;
    setCurrTime(timeFormated);
  }, [currTime, news.publishedAt]);

  return (
    <>
      {news.length !== 0 ? (
        <div className="news">
          <div
            className="news__image__title"
            style={{
              backgroundImage: `url(${news.urlToImage})`,
              backgroundSize: "cover",
            }}
          >
            <h3>{news.title}</h3>
            <h3>
              {date} | {currTime}
            </h3>
          </div>
          <div className="news__description">
            <p>{news.description}</p>
          </div>
        </div>
      ) : (
        <div className="news_lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </>
  );
}

export default News;
