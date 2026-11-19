import "./ItemCard.css";

function ItemCard({ item, onItemClick, onDelete, onEdit }) {
  return (
    <li className="item-card">
      <div className="item-card__header">
        <h3 className="item-card__name">{item.name}</h3>

        {item.weatherCategory && (
          <span className="item-card__category">
            {item.weatherCategory.charAt(0).toUpperCase() +
              item.weatherCategory.slice(1)}
          </span>
        )}

        {onEdit && (
          <button
            className="item-card__edit"
            type="button"
            onClick={onEdit}
            aria-label={"Edit " + item.name}
          >
            Edit
          </button>
        )}

        {onDelete && (
          <button
            className="item-card__delete"
            type="button"
            onClick={onDelete}
            aria-label={"Delete " + item.name}
          >
            ×
          </button>
        )}
      </div>

      <img
        className="item-card__image"
        src={item.imageUrl}
        alt={item.name}
        onClick={() => onItemClick(item)}
      />
    </li>
  );
}

export default ItemCard;
