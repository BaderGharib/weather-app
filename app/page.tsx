"use client";

import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import FakeWeather from "./data/FakeWeather.json";
import { useEffect, useState } from "react";
import { getWeatherIcon } from "@/utils/getWeatherIcon";

export default function Home() {
  // Extract current weather data and forecast data from FakeWeather
  // const currentWeatherData = {
  //   temp: Math.round(FakeWeather.list[6].main.temp - 273.15),
  //   condition: FakeWeather.list[6].weather[0].main,
  //   city: FakeWeather.city.name,
  //   humidity: FakeWeather.list[6].main.humidity,
  //   wind: FakeWeather.list[6].wind.speed,
  //   pressure: FakeWeather.list[6].main.pressure,
  //   icon: `/${FakeWeather.list[6].weather[0].main.toLowerCase()}.svg`,
  //   date: new Date(FakeWeather.list[6].dt_txt).toLocaleDateString("en-US", {
  //     weekday: "long",
  //     year: "numeric",
  //     month: "long",
  //     day: "numeric",
  //   }),
  // };

  // const forecastData = FakeWeather.list.slice(0, 4).map((item) => ({
  //   time: item.dt_txt.split(" ")[1].slice(0, 5),
  //   temp: Math.round(item.main.temp - 273.15),
  //   icon: `/${item.weather[0].main.toLowerCase()}.svg`,
  // }));

  // Fetched weather data
  const [city, setCity] = useState("Tripoli");
  const [weatherData, setWeatherData] = useState<any>(null);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWeatherData = async () => {
      setloading(true);
      setError("");
      try {
        const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=${apiKey}`
        );
        const data = await response.json();
        if (data.cod !== "200") {
          setError("City not found");
        } else {
          setWeatherData(data);
        }
      } catch (error) {
        setError("Failed to fetch weather data");
      } finally {
        setloading(false);
      }
    };
    fetchWeatherData();
  }, [city]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!weatherData) return <p>No data available</p>;

  const currentWeatherData = weatherData.list[0];

  const forecastData = weatherData.list.map((item: any) => ({
    time: new Date(item.dt_txt).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
    temp: Math.round(item.main.temp),
    condition: item.weather[0].main,
    icon: getWeatherIcon(item.weather[0].id),
  }));

  return (
    <main>
      <Search setCity={setCity} />

      <CurrentWeather
        temp={Math.round(currentWeatherData.main.temp)}
        condition={currentWeatherData.weather[0].main}
        city={weatherData.city.name}
        icon={getWeatherIcon(currentWeatherData.weather[0].id)}
        humidity={currentWeatherData.main.humidity}
        wind={currentWeatherData.wind.speed}
        pressure={currentWeatherData.main.pressure}
        date={new Date(currentWeatherData.dt_txt).toLocaleString()} // or toLocaleDateString()
      />

      {/* <CurrentWeather
        temp={currentWeatherData.temp}
        condition={currentWeatherData.condition}
        city={currentWeatherData.city}
        humidity={currentWeatherData.humidity}
        wind={currentWeatherData.wind}
        pressure={currentWeatherData.pressure}
        icon={currentWeatherData.icon}
        date={currentWeatherData.date}
      /> */}
      <Forecast forecastData={forecastData} />
    </main>
  );
}
