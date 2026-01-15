export default function Home() {
  return (
    <main>
      <section className="searchSection">
        <h1>Weather App</h1>
        <div className="searchSectionBox">
          <input type="search" placeholder="Enter city name" />
          <button>Search</button>
        </div>
      </section>

      <section className="currentWeatherSection">
        <h2>City Name</h2>
        <p>date</p>
        <div className="weatherMain">
          <div className="weatherIcon">
            <img
              src="https://placehold.co/100x100"
              alt="weather icon placeholder"
            />
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

      <section className="forecastSection">
        <h2>Forecast</h2>
        <div className="forecastContainer">
          <div>12:00 = 23C</div>
          <div>12:00 = 23C</div>
          <div>12:00 = 23C</div>
          <div>12:00 = 23C</div>
          <div>12:00 = 23C</div>
        </div>
      </section>
    </main>
  );
}
