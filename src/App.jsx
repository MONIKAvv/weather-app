import { useState } from "react";
import "./App.css";
import search from "./assets/icons/search.svg";
import { useStateContext } from "./context";
import MiniCards from "./components/MiniCards";
import Background from "./components/Background";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [input, setInput] = useState("");
  // context state management
  const { weather, thisLocation, values, place, setPlace } = useStateContext();

  const submitCity = () => {
    setPlace(input);
    setInput("");
  };

  return (
    <div className="w-full h-screen text-white px-8">
      <nav className="w-full p-5 flex justify-between items-center">
        <h1 className="font-bold tracking-wide text-3xl">
          Weather Application
        </h1>
        <div className="bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2">
          <img src={search} alt="search" className="w-[1.5rem] h-[1.5rem]" />
          <input
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                //submit the form
                submitCity();
              }
            }}
            type="text"
            placeholder="Search City"
            className="focus:outline-none w-full text-[#212121] text-lg"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </nav>
      <Background />
      <div className="flex"></div>
      <main className="w-full flex justify-center items-center gap-8 py-20 px-[10%]">
        <WeatherCard
          place={thisLocation}
          windspeed={weather.wspd}
          humidity={weather.humidity}
          temperature={weather.temp}
          heatIndex={weather.heatIndex}
          iconString={weather.conditions}
          conditions={weather.conditions}
        />
        <div className="flex justify-center gap-8 flex-wrap w-[60%]">
          {/* all forcasted value in values */}
          {values?.slice(1, 7).map((current) => {
            return (
              <MiniCards
                key={current.datetime}
                time={current.datetime}
                temp={current.temp}
                iconString={current.conditions}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
