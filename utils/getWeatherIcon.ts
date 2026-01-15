export function getWeatherIcon(weatherId: number): string {
  if (weatherId < 300) return "/storm.svg";
  if (weatherId < 500) return "/drizzle.svg";
  if (weatherId < 600) return "/rain.svg";
  if (weatherId < 700) return "/snow.svg";
  if (weatherId < 800) return "/fog.svg";
  if (weatherId === 800) return "/clear.svg";
  if (weatherId === 801) return "/partlycloudy.svg";
  if (weatherId <= 805) return "/mostlycloudy.svg";

  return "/clear.svg";
}
