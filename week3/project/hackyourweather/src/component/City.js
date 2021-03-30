import React from 'react'
import '../city.css'
import {FaTrashAlt} from 'react-icons/fa'

function City({props, handleDelete}) {

    return (
      <div>
       {props.map((props) => (
        <div className= "main-location">

          <div className="location">
            <h1>{props.name}, {props.sys.country}</h1>
            <h3>{props.weather[0].main}</h3> 
            <p>{props.weather[0].description}</p>
            <p>min temp:  {props.main.temp_min} °C</p>
            <p>max temp:  {props.main.temp_max} °C</p>
            <p>location:  {props.coord.lon}, {props.coord.lat}</p>  
          </div>

          <div className="name"> 
            <FaTrashAlt style={{marginLeft:"80px", fontSize:"20px", cursor:"pointer"}} onClick={() => handleDelete(props.id)}/>
            <img src={`http://openweathermap.org/img/w/${props.weather[0].icon}.png`}/>
          </div>

        </div>   
      ))}
    </div>
    )
}

export default City


