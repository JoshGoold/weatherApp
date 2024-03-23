import { useState } from "react";
function App() {

  const [city, setCity] = useState("");
  const [text, setText] = useState("");
  const [vis, setVis] = useState(false);
  const [noCity, setNoCity] = useState(false);
  const [cityDis, setCityDis] = useState("")
  const [tempDis, setTempDis] = useState("");
  const [humidityDis, setHumidityDis] = useState("");
  const [descDis, setDescDis] = useState("");
  const [emoji, setEmoji] = useState("");

  const APIKEY = "9dd767299364de6371ad973498638457";
  
  async function handleSubmit(event){
    event.preventDefault();
    
    if (city){
      try{
        setVis(true)
        setNoCity(true)
        const weatherData = await getWeatherData(city);
        displayWeatherInfo(weatherData);
      }
      catch(error){
        console.error(error);
        displayError(error);
      }

    } else{
      displayError("Please enter a city")
    }

  }

  async function getWeatherData(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`;
    const response = await fetch(apiUrl);

    if(!response.ok){
      throw new Error("Could not fetch data");
    }
    return await response.json();
  }
  function displayWeatherInfo(data){
    const {name: city, 
           main: {temp, humidity}, 
           weather: [{description, id}]} = data;
    setCityDis(city) ;
    const celcius = (temp-273.15);
    setTempDis(celcius.toFixed(2));
    setHumidityDis(humidity);
    setDescDis(description);
    setEmoji(getWeatherEmoji(id));
  }
  function getWeatherEmoji(weatherId){
    switch(true){
      case(weatherId >= 200 && weatherId < 300):
        return "🌩️"
      case(weatherId >= 300 && weatherId < 400):
        return "🌦️"
      case(weatherId >= 500 && weatherId < 600):
        return "🌧️"
      case(weatherId >= 600 && weatherId < 700):
        return "🌨️"
      case(weatherId >= 700 && weatherId < 800):
        return "🌥️"
      case(weatherId === 800):
        return "☀️"
      case(weatherId > 800):
        return "☁️"
    }
  }
  function displayError(message){
    setNoCity(true);
    setText(message) ;
  }
  

  return (
    <>
    <form onSubmit={handleSubmit} className='weatherForm'>
      <input type='text' onChange={(e)=> setCity(e.target.value.toLowerCase())} className='cityInput' placeholder='Enter city'></input>
      <button type='submit'>Get Weather</button>
    </form>

      <div className='card'>
        {noCity && (<>
         {vis &&(<>
        <h1 className='cityDisplay'>{cityDis}</h1>
        <p className='tempDisplay'>{tempDis}°C</p>
        <p className='humidityDisplay'>Humidity: {humidityDis}%</p>
        <p className='descDisplay'>{descDis}</p>
        <p className='weatherEmoji'>{emoji}</p>
        </>)}
        {!vis &&( <p className='errorDisplay'>{text}</p>)}
        </>)}
       
      </div>
    </>
  )
}

export default App
