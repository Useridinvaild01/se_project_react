import ItemCard from "./ItemCard";
import "./ClothesSection.css";

function ClothesSection({
  weather,
  clothingItems = [],
  customItems = [],
  onItemClick,
  onDeleteItem,
  onEditItem,
}) {
  const currentCategory = weather ? weather.type : null;

  const recommendedItems =
    currentCategory === null
      ? clothingItems
      : clothingItems.filter(
          (item) => item.weatherCategory === currentCategory
        );

  const filteredCustomItems =
    currentCategory === null
      ? customItems
      : customItems.filter(
          (item) => (item.weatherCategory || "warm") === currentCategory
        );

  return (
    <section className="clothes-section">
      <ul className="clothes-section__items">
        {recommendedItems.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            onItemClick={onItemClick}
          />
        ))}

        {filteredCustomItems.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            onItemClick={onItemClick}
            onDelete={() => onDeleteItem(item.id)}
            onEdit={() => onEditItem(item)}
          />
        ))}
      </ul>
    </section>
  );
}

export default ClothesSection;
