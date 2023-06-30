import { useEffect, useState } from "react";
import { format } from "date-fns";
import styles from "./news.module.css";

const News = () => {
  const [news, setNews] = useState("");
  const [date, setDate] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      await fetch(
        "https://newsapi.org/v2/everything?q=weather&apiKey=4ef9b38002184be3bf2ccb7b066196af"
      )
        .then(async (data) => await data.json())
        .then((res) => setNews(res.articles[2]));
    };
    fetchNews();
  }, []);
  

  useEffect(() => {
    const today = new Date();
    const formattedDate = format(today, "dd-MM-yyyy");
    setCurrentDate(formattedDate);

    const formattedTime = today.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    setCurrentTime(formattedTime);
  }, []);

  return (
    <div className={styles.container}>
      <img src={news.urlToImage} className={styles.image} />
      <div className={styles.description}>
        {news.description}
      </div>
      <div className={styles.details}>
        <p className={styles.title}>{news.title}</p>
        <span className={styles.date}>{currentDate}</span>
        <span className={styles.time}>{currentTime}</span>
      </div>
    </div>
  );
};

export default News;
