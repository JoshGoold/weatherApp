import { useState, useEffect } from "react";
function Global() {
  const [city, setCity] = useState("Toronto");
  const [temp, setTemp] = useState("");
  const [country, setCountry] = useState("");
  const [emoji, setEmoji] = useState("");

  const [city1, setCity1] = useState("Miami");
  const [temp1, setTemp1] = useState("");
  const [country1, setCountry1] = useState("");
  const [emoji1, setEmoji1] = useState("");

  const [city2, setCity2] = useState("Belarus");
  const [temp2, setTemp2] = useState("");
  const [country2, setCountry2] = useState("");
  const [emoji2, setEmoji2] = useState("");

  const [city3, setCity3] = useState("Romania");
  const [temp3, setTemp3] = useState("");
  const [country3, setCountry3] = useState("");
  const [emoji3, setEmoji3] = useState("");

  const APIKEY = "9dd767299364de6371ad973498638457";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`;
  const apiUrl1 = `https://api.openweathermap.org/data/2.5/weather?q=${city1}&appid=${APIKEY}`;
  const apiUrl2 = `https://api.openweathermap.org/data/2.5/weather?q=${city2}&appid=${APIKEY}`;
  const apiUrl3 = `https://api.openweathermap.org/data/2.5/weather?q=${city3}&appid=${APIKEY}`;

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const {
          sys: { country },
          name: city,
          main: { temp },
          weather: [{ id }],
        } = data;
        setCity(city);
        setCountry(country);
        setTemp(`${(temp - 273.15).toFixed(1)} C°`);
        setEmoji(getWeatherEmoji(id));
      });
    fetch(apiUrl1)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const {
          sys: { country },
          name: city,
          main: { temp },
          weather: [{ id }],
        } = data;
        setCity1(city);
        setCountry1(country);
        setTemp1(`${(temp - 273.15).toFixed(1)} C°`);
        setEmoji1(getWeatherEmoji(id));
      });
    fetch(apiUrl2)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const {
          sys: { country },
          name: city,
          main: { temp },
          weather: [{ id }],
        } = data;
        setCity2(city);
        setCountry2(country);
        setTemp2(`${(temp - 273.15).toFixed(1)} C°`);
        setEmoji2(getWeatherEmoji(id));
      });
    fetch(apiUrl3)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const {
          sys: { country },
          name: city,
          main: { temp },
          weather: [{ id }],
        } = data;
        setCity3(city);
        setCountry3(country);
        setTemp3(`${(temp - 273.15).toFixed(1)} C°`);
        setEmoji3(getWeatherEmoji(id));
      });
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
    
  }, [city, city1, city2, city3]);
  
  const cityNames = [
    "Toronto", "Miami", "Romania", "Vancouver", "Egypt",
    "Greece", "Italy", "Portugal", "Texas", "Washington",
    "Japan", "China", "Dubai", "Somalia", "Nigeria",
    "Greenland", "California", "New York",
  ]
  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomCityIndex1 = Math.floor(Math.random() * cityNames.length);
      const randomCityIndex2 = Math.floor(Math.random() * cityNames.length);
      const randomCityIndex3 = Math.floor(Math.random() * cityNames.length);
      const randomCityIndex4 = Math.floor(Math.random() * cityNames.length);
  
      setCity(cityNames[randomCityIndex1]);
      setCity1(cityNames[randomCityIndex2]);
      setCity2(cityNames[randomCityIndex3]);
      setCity3(cityNames[randomCityIndex4]);
    }, 10000);
  
    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);
    
 

  return (
    <div className="blueprint">
      <div className="location">
        <h1>
          {city}, {country}
        </h1>
        <p className="emoji">{emoji}</p>
        <p>{temp}</p>
      </div>
      <div className="location">
        <h1>
          {city1}, {country1}
        </h1>
        <p className="emoji">{emoji1}</p>
        <p>{temp1}</p>
      </div>
      <div className="location">
        <h1>
          {city2}, {country2}
        </h1>
        <p className="emoji">{emoji2}</p>
        <p>{temp2}</p>
      </div>
      <div className="location">
        <h1>
          {city3}, {country3}
        </h1>
        <p className="emoji">{emoji3}</p>
        <p>{temp3}</p>
      </div>
    </div>
  );
}
export default Global;
