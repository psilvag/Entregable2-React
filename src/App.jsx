import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios'

import { Loading } from './components/Loading'
import { WeatherCard } from './components/WeatherCard'

function App() {
  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  
  // El primer useEffect obtiene las coordenadas del usuario mediante la API de geolocalizacion de HTML5
  useEffect (()=>{
    
    const succes=pos=>{

      const objectPosition={
        lat:pos.coords.latitude,
        lon:pos.coords.longitude
         
    }

    setCoords(objectPosition)
 
  }
     
    navigator.geolocation.getCurrentPosition(succes)  // recibe tres callbacks pero no es obligatorio
  },[])

  // Consumimos la API 
  useEffect (()=>{
    
    if(coords)
    {  
      const apiKey='6653c3a5060326e806fe5aede05e7a6a'
      const URL=`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}`
      
      axios.get(URL)
      .then(res=>setWeather(res.data))
      .catch(error=>console.log(error))
       
    }
  
  },[coords])
                    
  console.log(weather);

   
  return (
    <div  className="App">
      
       {
         weather? <WeatherCard weather={weather}/>:<Loading/> 
       }
   </div>
  )
}

export default App
