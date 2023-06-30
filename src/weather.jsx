import { useEffect, useState } from "react";
import { format } from "date-fns";
import styles from "./weather.module.css";

const Weather = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          "http://api.weatherapi.com/v1/current.json?key=5398fd2769264acf93952716233006&q=Chennai&aqi=no"
        );
        const data = await response.json();
        setCurrentWeather(data);
      } catch (error) {
        console.error("Failed to fetch weather data:", error);
      }
    };

    fetchWeather();
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
    <div className={styles.weatherContainer}>
      <div className={styles.header}>
        <span>{currentDate}</span>
        <span>{currentTime}</span>
      </div>
      <div>
        {currentWeather && (
          <div className={styles.weatherInfo}>
            <div className={styles.weatherItem}>
              <img
                src={currentWeather.current.condition.icon}
                className={styles.weatherIcon}
                alt=""
              />
              <p>{currentWeather.current.condition.text}</p>
            </div>
            <div className={styles.weatherItem}>
              <p className={styles.temperature}>
                <span>{currentWeather.current.temp_c}</span>C
              </p>
              <p>{currentWeather.current.pressure_mb} pressure</p>
            </div>
            <div className={styles.weatherItem}>
              <p className={styles.wind}>
                {currentWeather.current.wind_kph} wind
              </p>
              <p>{currentWeather.current.humidity} humidity</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
