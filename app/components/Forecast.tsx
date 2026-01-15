import ForecastItem from "./ForecastItem";
type Props = {};

const Forecast = (props: Props) => {
  return (
    <section className="forecastSection">
      <h2>Forecast</h2>
      <div className="forecastContainer">
        <ForecastItem />
        <ForecastItem />
        <ForecastItem />
        <ForecastItem />
        <ForecastItem />
      </div>
    </section>
  );
};

export default Forecast;
