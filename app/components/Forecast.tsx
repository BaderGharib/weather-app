import ForecastItem from "./ForecastItem";

type ForecastData = {
  time: string;
  temp: number;
  icon: string;
};

type Props = {
  forecastData: ForecastData[]; // array of forecast items
};

export default function Forecast({ forecastData }: Props) {
  return (
    <div className="forecastContainer">
      {forecastData.map((item, index) => (
        <ForecastItem
          key={index} // React needs a key for lists
          time={item.time}
          temp={item.temp}
          icon={item.icon}
        />
      ))}
    </div>
  );
}
