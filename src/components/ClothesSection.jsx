import { createElement } from "react";
import ItemCard from "./ItemCard";
import "./ClothesSection.css";
import { defaultClothingItems } from "../utils/clothingItems";

function ClothesSection({
  weather,
  customItems = [],
  onDeleteItem,
  onEditItem,
}) {
  const temperature = weather ? weather.main.temp : null;

  const currentCategory =
    temperature === null
      ? null
      : temperature >= 86
        ? "hot"
        : temperature >= 66
          ? "warm"
          : "cold";

  const recommendedItems =
    currentCategory === null
      ? []
      : defaultClothingItems.filter(
          (item) => item.weatherCategory === currentCategory
        );

  const filteredCustomItems =
    currentCategory === null
      ? []
      : customItems.filter(
          (item) => (item.weatherCategory || "warm") === currentCategory
        );

  return createElement(
    "section",
    { className: "clothes-section" },
    createElement(
      "div",
      { className: "clothes-section__items" },
      [
        ...recommendedItems.map((item) =>
          createElement(ItemCard, {
            key: item.id,
            item,
          })
        ),
        ...filteredCustomItems.map((item) =>
          createElement(ItemCard, {
            key: item.id,
            item,
            onDelete: () => onDeleteItem(item.id),
            onEdit: () => onEditItem(item),
          })
        ),
      ]
    )
  );
}

export default ClothesSection;
