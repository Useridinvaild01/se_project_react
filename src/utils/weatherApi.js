const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const getWeatherData = (latitude, longitude) => {
  const url =
    "https:" + "/" + "/" +
    "api.openweathermap.org/data/2.5/weather" +
    "?lat=" + latitude +
    "&lon=" + longitude +
    "&units=imperial" +
    "&appid=" + API_KEY;

  return fetch(url).then((res) => {
    if (!res.ok) {
      throw new Error("Failed to fetch weather data");
    }

    return res.json();
  });
};

export { getWeatherData };
