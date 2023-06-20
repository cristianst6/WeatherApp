import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [display, setDisplay] = useState("none");

  const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${location}&appid=f36d69c57df3c2958ebef5603b748f46`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
        setDisplay("grid");
      });
      setLocation("");
    }
  };

  return (
    <div className="app">
      <div className="searchbar">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          type="text"
          placeholder="Search a city"
        ></input>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].description}</p> : null}
            <p></p>
          </div>
        </div>

        <div className="bottom" style={{ display }}>
          <div className="feels_temp">
            {data.main ? (
              <p className="bold">{data.main.feels_like}°C</p>
            ) : null}
            <p>Feels Like</p>
          </div>
          <div className="wind">
            {data.wind ? <p className="bold">{data.wind.speed}°C</p> : null}
            <p>Wind</p>
          </div>
          <div className="min_temp">
            {data.main ? <p className="bold">{data.main.temp_min}°C</p> : null}
            <p>Min Temp</p>
          </div>
          <div className="max_temp">
            {data.main ? <p className="bold">{data.main.temp_max}°C</p> : null}
            <p>Max Temp</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
