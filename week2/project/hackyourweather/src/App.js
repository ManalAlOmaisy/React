import './App.css';
import React, {useState} from 'react';
import City from './component/City';
import Search from './component/Search';
// import cityWeather from './city-weather.json'
import {TiWeatherPartlySunny} from 'react-icons/ti'

function App() {

  const [cityWeather, setCityWeather]= useState('');
  const [cityName, setCityName]=useState();
  const [isLoading, setIsLoading]= useState(false)
  const [alert, setAlert] = useState({show:false})

  const handleCityName= e => {
    setCityName(e.target.value)
  }

  const handleAlert= ({text})=> {
    setAlert({show:true, text})
    setTimeout(()=> {setAlert({show:false})},3000)
  }

  const handleSubmit = e =>{
    e.preventDefault()
    getWeather()
  }

  
//function
const getWeather = async () => {

  try{
    if(cityName){
      setIsLoading(true);
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY} `);
      const data = await response.json()  

      if(response.ok){
        setCityWeather(data);
        setIsLoading(false);
      }
      else{
        handleAlert({text:`City Name Is Not Found`});
        setCityWeather('');
      }
    }
    
    else{
      handleAlert({text:`Please Enter City Name`});
      setCityWeather('');
      setIsLoading(false);
    }
  }  
  catch(err){
    handleAlert({text:`Something Went Wrong`})  
  }  
}


  return (
    <div className="container">

      {alert.show && <p className="weather-err">{alert.text}</p>}
          
      <h2 className="header">Weather <TiWeatherPartlySunny/></h2>
          
      {!alert && isLoading && <p className="header"> loading .....</p>}
        
      <Search value={cityName} onChange={handleCityName} handleSubmit= {handleSubmit} />

      {cityWeather && <City props={cityWeather}/>}
    </div>
  );
}

export default App;
