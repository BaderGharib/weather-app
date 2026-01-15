import Image from "next/image";

type Props = {
  temp: number;
  condition: string;
  city: string;
  humidity: number;
  wind: number;
  pressure: number;
  icon: string;
  date: string;
};

const CurrentWeather = ({
  temp,
  condition,
  city,
  humidity,
  wind,
  pressure,
  icon,
  date,
}: Props) => {
  return (
    <section className="currentWeatherSection">
      <h2>{city}</h2>
      <p>{date}</p>
      <div className="weatherMain">
        <div className="weatherIcon">
          <Image src={icon} alt={condition} width={100} height={100} />
        </div>
        <div>
          <p>{temp}°C</p>
          <p>{condition}</p>
        </div>
      </div>

      <div className="weatherInfo">
        <span>Humidity: {humidity}%</span>
        <span>Wind: {wind}km/h</span>
        <span>Pressure: {pressure}hPa</span>
      </div>
    </section>
  );
};

export default CurrentWeather;
