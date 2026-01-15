type Props = {
  time: string;
  temp: number;
  icon: string;
};

export default function ForecastItem({ time, temp, icon }: Props) {
  return (
    <div className="forecastItemContainer">
      <img src={icon} alt="weather icon" width={80} height={80} />
      <p>{time}</p>
      <p>{temp}°C</p>
    </div>
  );
}
