import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext();
export const StateContextProvider = ({ children }) => {
  const [Weather, setWeather] = useState({});
  const [place, setPlace] = useState("Hazaribagh");
  const [values, setValues] = useState([]);
  const [thisLocation, setLocation] = useState("");

  // fetch WheatherData from API

  const WheatherData = async () => {
    const options = {
      method: "GET",
      url: "https://visual-crossing-weather.p.rapidapi.com/forecast",
      params: {
        aggregateHour: '24',
        location: 'place',
        contentType: 'json',
        unitGroup: 'metric',
        shortColumnNames: 0,
      },
      header: {
        "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
        "X-RapidAPI-Host": "visual-crossing-weather.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      console.log(response.data);
      const data = Object.values(response.data.location)[0]
      setLocation(data.address)
      setValues(data.values)
      setWeather(data.values[0])
    } catch (error) {
      console.error(error);
      alert(`There is no Such City Found!`)
    }
  };

  useEffect(() => {
    WheatherData();
  }, [place])

  return (
    <StateContext.Provider
      values={{
        Weather,
        place,
        values,
        thisLocation,
        setPlace,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
