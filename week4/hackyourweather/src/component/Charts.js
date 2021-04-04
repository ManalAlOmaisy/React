import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

   const linkStyle = {
    backgroundColor: "white",
    color: "#2F4F4F",
    padding: "14px 25px",
    textDecoration: "none",
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
    width:"100px",
    margin:"auto",
    cursor: "pointer",
    fontWeight:"bold"
   }

const Charts = () => {
      const { cityId } = useParams();
      const [chartData, setChartData] = useState();
      const [cityName, setCityName] = useState("")
     
      const fetchChart = async() =>{
          try{
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`)
            const data = await response.json()
            setCityName(data.city)
            setupChart({...data})
          }
          catch(err){
           throw Error(err)
          }

      }
      useEffect(() => {
        
         fetchChart()
      }, [cityId])

    function setupChart(item) {
      setChartData(
      item.list.map((item) => {
        return {
          name: item.dt_txt,
          temp: item.main.temp,
        };
      })
      );
    }
    return (
         <>
          <h1 style={{textAlign:"center"}}>5 Days Forcast For</h1>
          <h1 style={{textAlign:"center"}}> {cityName.name} {cityName.country}</h1>
          {chartData && (
            <AreaChart style={{margin:"auto"}}
              width={700}
              height={300}
              data={chartData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="temp" stroke="white" fill="rgb(238, 187, 70)" />
          </AreaChart>
          )}
          <Link to ="/" style={linkStyle}>Back</Link>
    </>
    )
    
}

export default Charts
