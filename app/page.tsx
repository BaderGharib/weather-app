import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";

export default function Home() {
  return (
    <main>
      <Search />
      <CurrentWeather />
      <Forecast />
    </main>
  );
}
