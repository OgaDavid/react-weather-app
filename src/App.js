import './App.css';
import Search from './components/search/Search';
import Currentweather from './components/current-weather/Weather';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';
import { useState } from 'react';
import Forecast from './components/forecast/Forecast';

function App() {

  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchchange = (searchData) => {
    const [lat, long] = searchData.value.split(" ");

    const weatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=metric`);
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([weatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
    .catch((err) => console.log(err));
  }

  console.log(forecast);

  return (
    <div className="container">
      <div className='search'>
        <Search onSearchChange={handleOnSearchchange} />
      </div>
      {weather && <Currentweather data={weather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
