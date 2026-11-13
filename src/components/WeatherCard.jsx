import { createElement } from "react";
import "./WeatherCard.css";

import sunny from "../assets/sunny.png";
import moon from "../assets/Moon.png";
import cloudy from "../assets/Cloudy.png";
import union from "../assets/Union.png";
import rainy from "../assets/Rainy.png";
import rainyNight from "../assets/Rainy night.png";
import thunderstorm from "../assets/Thunderstorm (1).png";
import thunderstormNight from "../assets/Thunderstorm night.png";
import snowy from "../assets/Snowy.png";
import snowyNight from "../assets/Snowy night.png";
import foggy from "../assets/Foggy.png";
import foggyNight from "../assets/Foggy night.png";

function WeatherCard({ weather, error }) {
  const condition = weather?.weather?.[0]?.main || "Clear";

  const isNight = weather
    ? weather.dt < weather.sys.sunrise ||
      weather.dt >= weather.sys.sunset
    : false;

  let illustration = foggy;

  if (condition === "Clear") {
    illustration = isNight ? moon : sunny;
  } else if (condition === "Clouds") {
    illustration = isNight ? null : cloudy;
  } else if (condition === "Rain" || condition === "Drizzle") {
    illustration = isNight ? rainyNight : rainy;
  } else if (condition === "Thunderstorm") {
    illustration = isNight ? thunderstormNight : thunderstorm;
  } else if (condition === "Snow") {
    illustration = isNight ? snowyNight : snowy;
  } else {
    illustration = isNight ? foggyNight : foggy;
  }

  const weatherIllustration =
    condition === "Clouds" && isNight
      ? createElement(
          "div",
          { className: "weather-card__cloudy-night" },
          createElement("img", {
            className: "weather-card__moon",
            src: moon,
            alt: "",
          }),
          createElement("img", {
            className: "weather-card__eclipse",
            src: union,
            alt: "Cloudy night",
          })
        )
      : createElement("img", {
          className:
            condition === "Clear"
              ? "weather-card__illustration"
              : "weather-card__illustration weather-card__illustration--wide",
          src: illustration,
          alt: condition + (isNight ? " at night" : ""),
        });

  return createElement(
    "section",
    { className: "weather-card" },
    createElement(
      "div",
      { className: "weather-card__info" },
      error
        ? createElement("p", null, error)
        : weather
          ? createElement(
              "div",
              null,
              createElement(
                "h2",
                { className: "weather-card__temperature" },
                Math.round(weather.main.temp) + "°F"
              ),
              createElement(
                "p",
                { className: "weather-card__description" },
                weather.weather[0].description
              )
            )
          : createElement("p", null, "Loading weather...")
    ),
    weather && weatherIllustration
  );
}

export default WeatherCard;
