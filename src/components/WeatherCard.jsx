import React from 'react'
import { useState } from 'react'
import cloud from '../images/cloud.png'
import Wind from '../images/Wind.png'
import cloudy from '../images/cloudy.png'
import clouds_weather from '../images/clouds_weather.png'


export const WeatherCard = ({ weather }) => {


  const [isDegree, setisDegree] = useState(true)
  const degree = () => setisDegree(!isDegree)

  function toCelsius() {
    let Celsius = weather.main.temp - 273.15
    return Celsius
  }
  function toFahrenheit() {
    let Fahrenheit = 1.8 * ((weather.main.temp) - 273.15) + 32
    return Fahrenheit
  }



  return (
    <div className='weather-card'>
      <h2>Weather App</h2>
      <div className='weather-location'>
        <p>Current Time:&nbsp; &nbsp;<span>City: &nbsp;</span>{`${weather.name} ${weather.sys.country}`}</p>

      </div>
      <div className='weather-info'>
        <div className='weather-icon'>
          <img src={weather ? `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png` : ''} alt="" />
        </div>

        <div className='weather-info-temp'>
          <div className='weather-temperature'>{isDegree ? `${(toCelsius()).toFixed(1)} ºC` : ` ${(toFahrenheit()).toFixed(1)} ºF`}
          </div>

          <div className='weather-sensation'>
            <span>Humidity &nbsp;</span>{`${weather.main.humidity} %`}
          </div>
          <div className='weather-description'>
            Description:&nbsp;{weather.weather[0].description}
          </div>
        </div>
        <div className='button-degree'>
          <button onClick={degree} className='weather-button'>{isDegree ? 'Change to ºF' : 'Change to ºC'}</button>
        </div>
      </div>

      <div className='weather-principal-info'>

        <div className='weather-speed'>
          <img className='img_info' src={Wind} alt="" />
          Wind speed <span>{`${weather.wind.speed} m/s`}</span>
        </div >
        <div className='weather-clouds'>
          <img className='img_info' src={cloud} alt="" />
          Clouds     <span>{`${weather.clouds.all} %`}</span>
        </div>
        <div className='weather-pressure' >
          <img className='img_info' src={cloudy} alt="" />
          Pressure   <span>{`${weather.main.pressure} mb`}</span>
        </div>

        <div className='weather-vis' >
          <img className='img_info' src={clouds_weather} alt="" />
          Visibility <span>{`${weather.visibility / 1000} Km`}</span>
        </div>
      </div>

    </div>

  )
}
