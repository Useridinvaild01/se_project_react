import "./Main.css";
import WeatherCard from "./WeatherCard";
import ClothesSection from "./ClothesSection";

function Main({
  weather,
  error,
  clothingItems,
  customItems,
  onItemClick,
  onDeleteItem,
  onEditItem,
}) {
  return (
    <main className="main">
      <WeatherCard weather={weather} error={error} />
      <section className="clothes-intro">
        <h2 className="clothes-section__title">
          Today is {weather ? Math.round(weather.temp) + "°F" : "..."}
        </h2>
        <p className="clothes-section__subtitle">
          You may want to wear:
        </p>
      </section>
      <ClothesSection
        weather={weather}
        clothingItems={clothingItems}
        customItems={customItems}
        onItemClick={onItemClick}
        onDeleteItem={onDeleteItem}
        onEditItem={onEditItem}
      />
    </main>
  );
}

export default Main;
