import Image from "next/image";

type Props = {};

const CurrentWeather = (props: Props) => {
  return (
    <section className="currentWeatherSection">
      <h2>City Name</h2>
      <p>date</p>
      <div className="weatherMain">
        <div className="weatherIcon">
          <Image src="/storm.svg" alt="storm icon" width={100} height={100} />
        </div>
        <div>
          <p>Temperature</p>
          <p>Condition</p>
        </div>
      </div>

      <div className="weatherInfo">
        <span>Humidity: --%</span>
        <span>Wind: -- km/h</span>
        <span>Pressure: -- hPa</span>
      </div>
    </section>
  );
};

export default CurrentWeather;
