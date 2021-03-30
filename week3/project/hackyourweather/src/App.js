import './App.css';
import React, {useState, useEffect} from 'react';
import City from './component/City';
import Search from './component/Search';
// import cityWeather from './city-weather.json'
import {TiWeatherPartlySunny} from 'react-icons/ti'

function App() {
  const [cityName, setCityName]=useState();
  const [cityWeather, setCityWeather]= useState([]);
  const [isLoading, setIsLoading]= useState(false);
  const [alert, setAlert] = useState({show:false});
  const [buttonCount, setButtonCount] = useState(false);

  const handleCityName= e => {
    setCityName(e.target.value)
  }

  const handleAlert= ({text})=> {
    setAlert({show:true, text})
    setTimeout(()=> {setAlert({show:false})},3000)
  }

  const handleSubmit = e =>{
    e.preventDefault()
    setButtonCount(!buttonCount)
    
  }

  const handleDelete = (id) =>{
  let itemDeleted = cityWeather.filter(data => data.id !== id)
  setCityWeather(itemDeleted)
  handleAlert({text:`CITY IS DELETED`});
  }

  
//function
const getWeather = async () => {
try{
    if(cityName){
      setIsLoading(true);
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY} `);
      const data = await response.json()  
      
      if(response.ok){

        setCityWeather((cityWeather)=> {
          if(cityWeather.some((city) => city.name === data.name)){
            handleAlert({text:`City Name Is already exist`});
            return [...cityWeather]
          }
          else{
            handleAlert({text:``});
            return [data, ...cityWeather]  
          }
        })

      }
      else{
        handleAlert({text:`City Name Is Not Found`});
        setCityWeather([...cityWeather]);
      }
    }
  }   
  catch(err){
    handleAlert({text:`Something Went Wrong`})  
  }  
}

useEffect(() => {
  getWeather()
  setAlert({show:false})
}, [buttonCount])

  return (
    <div className="container">    
      <h2 className="header">Weather <TiWeatherPartlySunny/></h2>
          
      {!alert && isLoading && <p className="header"> loading .....</p>}
      <Search value={cityName} onChange={handleCityName} handleSubmit= {handleSubmit} />
      {alert.show && <p className="weather-err">{alert.text}</p>}
      {cityWeather && <City props={cityWeather} handleDelete= {handleDelete}/>}
    </div>
  );
}

export default App;
