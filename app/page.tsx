import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import FakeWeather from "./data/FakeWeather.json";

export default function Home() {
  const currentWeatherData = {
    temp: Math.round(FakeWeather.list[6].main.temp - 273.15),
    condition: FakeWeather.list[6].weather[0].main,
    city: FakeWeather.city.name,
    humidity: FakeWeather.list[6].main.humidity,
    wind: FakeWeather.list[6].wind.speed,
    pressure: FakeWeather.list[6].main.pressure,
    icon: `/${FakeWeather.list[6].weather[0].main.toLowerCase()}.svg`,
    date: new Date(FakeWeather.list[6].dt_txt).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };

  const forecastData = FakeWeather.list.slice(0, 4).map((item) => ({
    time: item.dt_txt.split(" ")[1].slice(0, 5),
    temp: Math.round(item.main.temp - 273.15),
    icon: `/${item.weather[0].main.toLowerCase()}.svg`,
  }));

  return (
    <main>
      <Search />
      <CurrentWeather
        temp={currentWeatherData.temp}
        condition={currentWeatherData.condition}
        city={currentWeatherData.city}
        humidity={currentWeatherData.humidity}
        wind={currentWeatherData.wind}
        pressure={currentWeatherData.pressure}
        icon={currentWeatherData.icon}
        date={currentWeatherData.date}
      />
      <Forecast forecastData={forecastData} />
    </main>
  );
}
