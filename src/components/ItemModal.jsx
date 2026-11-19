import { useEffect } from "react";
import { createPortal } from "react-dom";
import "./ItemModal.css";

function ItemModal({ item, onClose }) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div className="item-preview" onClick={onClose}>
      <div
        className="item-preview__content"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="item-preview__close"
          type="button"
          onClick={onClose}
          aria-label="Close preview"
        >
          ×
        </button>

        <img
          className="item-preview__image"
          src={item.imageUrl}
          alt={item.name}
        />

        <h2 className="item-preview__name">{item.name}</h2>

        {item.weatherCategory && (
          <p className="item-preview__category">
            Weather: {item.weatherCategory.charAt(0).toUpperCase() +
              item.weatherCategory.slice(1)}
          </p>
        )}
      </div>
    </div>,
    document.body
  );
}

export default ItemModal;
