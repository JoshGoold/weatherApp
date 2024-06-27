import { useEffect, useState } from "react";
import News from "./Components/News.jsx";
import Global from "./Components/Global.jsx";
import Warming from "./Components/Warming.jsx";
import Default from "./assets/default.jpeg";
import { IoIosSearch } from "react-icons/io";
import { FiSunrise } from "react-icons/fi";
import { BsSunsetFill } from "react-icons/bs";
import { TiWeatherWindyCloudy } from "react-icons/ti";
function App() {
  const [city, setCity] = useState("");
  const [text, setText] = useState("");
  const [vis, setVis] = useState(false);
  const [noCity, setNoCity] = useState(false);
  const [cityDis, setCityDis] = useState("");
  const [tempDis, setTempDis] = useState("");
  const [humidityDis, setHumidityDis] = useState("");
  const [descDis, setDescDis] = useState("");
  const [emoji, setEmoji] = useState("");
  const [weatherIMG, setWeatherImg] = useState(Default);
  const [windSpeed, setWindSpeed] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");
  const [country, setCountry] = useState("");
  const [temp, setTemp] = useState("");
  const APIKEY = "9dd767299364de6371ad973498638457";

  async function handleSubmit(event) {
    event.preventDefault();

    if (city) {
      try {
        setVis(true);
        setNoCity(true);
        const weatherData = await getWeatherData(city);
        displayWeatherInfo(weatherData);
      } catch (error) {
        console.error(error);
        displayError(error);
      }
    } else {
      displayError("Please enter a city");
      setWeatherImg(Default);
    }
  }

  async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Could not fetch data");
    }
    return await response.json();
  }
  function displayWeatherInfo(data) {
  console.log(data)
    const {
      sys: {country, sunrise, sunset},
      wind: {speed},
      name: city,
      main: { temp, humidity },
      weather: [{ description, id }],
    } = data;
    setTemp(temp)
    setCityDis(city);
    setCountry(country)
    const rise = new Date(sunrise * 1000)
    const set = new Date(sunset * 1000)
    const fset = set.toLocaleTimeString().replace(".", "").replace(".", "");
    const frise = rise.toLocaleTimeString().replace(".", "").replace(".", "");
    setSunrise(frise)
    setSunset(fset)
    const wind = (speed * 3.6).toFixed(1)
    setWindSpeed(wind)
    const celcius = temp - 273.15;
    setTempDis(`${celcius.toFixed(1)} C°`);
    setHumidityDis(humidity);
    setDescDis(description);
    setEmoji(getWeatherEmoji(id));
  }
  function getWeatherEmoji(weatherId) {
    switch (true) {
      case weatherId >= 200 && weatherId < 300:
        return "🌩️";
      case weatherId >= 300 && weatherId < 400:
        return "🌦️";
      case weatherId >= 500 && weatherId < 600:
        return "🌧️";
      case weatherId >= 600 && weatherId < 700:
        return "🌨️";
      case weatherId >= 700 && weatherId < 800:
        return "🌥️";
      case weatherId === 800:
        return "☀️";
      case weatherId > 800:
        return "☁️";
    }
  }
  function displayError(message) {
    setNoCity(false);
    setVis(true);
    setText(message);
  }
 useEffect(()=>{
  const inputElement = document.getElementById("input");
  inputElement.addEventListener("mouseover", ()=>{
    inputElement.style.paddingLeft = "20px";
    inputElement.style.paddingRight = "20px";
    inputElement.style.paddingTop = "10px";
    inputElement.style.paddingBottom = "10px";
  })
  inputElement.addEventListener("mouseout",()=>{
    inputElement.style.padding = "3px";
  })
 },[])

 const handleCelcius = () =>{
  const celcius = (temp - 273.15).toFixed(1);
    setTempDis(`${celcius} C°`)
 }
 const handleFaren=()=>{
  const farenheit = ((temp-273.15)*(9/5)+32).toFixed(0)
  setTempDis(`${farenheit} F°`)
 }
 const handleKelvin=()=>{
  setTempDis(`${temp} K`)
 }
 const exit=()=>{
  setNoCity(false)
  setVis(false)
  setCity("")
 }
  
  return (
    <>
      <div className="body">
        <h1 className="title slideInLeft">
          Global View <TiWeatherWindyCloudy />         
       </h1>
          
       
          <form onSubmit={handleSubmit} className="slideInLeft weatherForm">
            <input
              id="input"
              value={city}
              type="text"
              onChange={(e) => setCity(e.target.value.toLowerCase())}
              className="cityInput"
              placeholder="Enter city"
            ></input>
            <button type="submit">
              <IoIosSearch className="icon" />
            </button>
          </form> 
       {!noCity && (
        <>
            <Global />
            
            <Warming/>
        </>
          )}
        <div className="core">
          
          {noCity && (
            <>
              
                {vis && (
                  <>
                  <div className="card slideDown">
                    <p onClick={exit} className="exit">❌</p>
                    <h1 className="cityDisplay">{cityDis}, {country}</h1> 
                    <span className="lt">Temperature</span>
                    <p className="tempDisplay">{tempDis}</p> 
                    <div>
                      <button onClick={handleCelcius}>C°</button>
                      <button onClick={handleFaren}>F°</button>
                      <button onClick={handleKelvin}>K</button>
                    </div>
                    <p className="humidityDisplay">Humidity: {humidityDis}%</p>
                  </div>
                  
                    <div className="sun">
                    <div className="minicard">
                    <p className="weatherEmoji">{emoji}</p>
                    <p className="descDisplay">{descDis}</p>
                    </div>
                    <div className="minicard">
                      <FiSunrise className="red"/>
                    <p className="sunriseset"><b>Sunrise</b>&nbsp; {sunrise}</p> 
                    <br/><BsSunsetFill className="black"/>
                    <p className="sunriseset"><b>Sunset</b>&nbsp; {sunset} </p>
                    </div>
                    </div>
                    <br/>
                    <div className="card">
                    <p className="wind">Wind: {windSpeed}km/h</p>
                  </div>
                  </>
                )}
                {!vis && <p className="errorDisplay">{text}</p>}
              
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
