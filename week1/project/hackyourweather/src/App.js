import logo from './logo.svg';
import './App.css';
import City from './component/City';
import cityWeather from './city-weather.json'

function App() {
  return (
    <div className="App">
         <h2>Weather</h2>
       {cityWeather.map( city => <City
          key={city.weather[0].id}
          name={city.name}
          country={city.sys.country}
          weatherMain={city.weather[0].main}
          weatherDesc={city.weather[0].description} 
          maxTemp={city.main.temp_min}
          minTemp={city.main.temp_max} 
          longitude={city.coord.lon} 
          lattitude={city.coord.lat}
       />)}
    </div>
  );
}

export default App;
