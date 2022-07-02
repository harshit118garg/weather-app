import React from "react";
import "./styles/Result.scss";

const Result = ({ apiData }) => {
  const { name, description, country, temp_max, temp_min, humidity, noData } =
    apiData;

  return (
    <>
      <div className="result">
        <div className="resultBox">
          {noData ? (
            <h2 className="noData">No Data Found</h2>
          ) : (
            <>
              <div className="row1">
                <h2>{description}</h2>
                <h1>
                  {name} <span>({country})</span>
                </h1>
              </div>
              <div className="row2">
                <h4>Temp-Min: {temp_min}°C</h4>
                <h4>Temp-Max: {temp_max}°C</h4>
                <h4>Humidity: {humidity}</h4>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Result;
