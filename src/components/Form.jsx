import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/Form.scss";
import Result from "./Result";

const Form = () => {
  const apiKey = `781e5612c2e0bf16a9ad111a1c54bce8`;

  const [inputCity, setInputCity] = useState("");
  const [data, setData] = useState({
    noData: "",
    name: "",
    temp_min: 0,
    temp_max: 0,
    humidity: 0,
    country: "",
    description: "",
  });

  const getWeatherDetails = (cityName) => {
    if (cityName) {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

      axios
        .get(url)
        .then((res) => {
          setData({
            name: res.data.name,
            temp_min: res.data.main.temp_min,
            temp_max: res.data.main.temp_max,
            humidity: res.data.main.humidity,
            description: res.data.weather[0].description,
            country: res.data.sys.country,
            noData: "",
          });
        })
        .catch((err) => console.log(`error ${err}`));
    } else {
      setData({
        noData: "No Data Found",
      });
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getWeatherDetails(inputCity);
  };

  useEffect(() => {
    getWeatherDetails(inputCity);
  }, []);

  return (
    <>
      <div className="formContainer">
        <form className="formBox">
          <input
            placeholder="City"
            className="inputBox"
            value={inputCity}
            onChange={(e) => setInputCity(e.target.value)}
          />
          <button type="submit" className="btn" onClick={handleSearch}>
            Search
          </button>
        </form>
      </div>

      <Result apiData={data} />
    </>
  );
};

export default Form;
