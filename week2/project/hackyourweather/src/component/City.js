import React from 'react'

function City({props}) {
    return (
      <div className= "main-location">
        <div className="location" >
            <h2>{props.name}, {props.sys.country}</h2>
            <h3>{props.weather[0].main}</h3> 
            <p>{props.weather[0].description}</p>
            <p>min temp:  {props.main.temp_min} °C</p>
            <p>max temp:  {props.main.temp_max} °C</p>
            <p>location:  {props.coord.lon}, {props.coord.lat}</p>  
        </div>
        <img src={`http://openweathermap.org/img/w/${props.weather[0].icon}.png`}/>
        
      </div>
    )
}

export default City


