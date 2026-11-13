import { createElement } from "react";
import "./Main.css";
import WeatherCard from "./WeatherCard";
import ClothesSection from "./ClothesSection";

function Main({
  weather,
  error,
  customItems,
  onDeleteItem,
  onEditItem,
}) {
  return createElement(
    "main",
    { className: "main" },
    createElement(WeatherCard, { weather, error }),
    createElement(
      "section",
      { className: "clothes-intro" },
      createElement(
        "h2",
        { className: "clothes-section__title" },
        "Today is " +
          (weather ? Math.round(weather.main.temp) + "°F" : "...")
      ),
      createElement(
        "p",
        { className: "clothes-section__subtitle" },
        "You may want to wear:"
      )
    ),
    createElement(ClothesSection, {
      weather,
      customItems,
      onDeleteItem,
      onEditItem,
    })
  );
}

export default Main;
