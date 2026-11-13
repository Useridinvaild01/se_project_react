import { createElement, useEffect } from "react";
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
    createElement(
      "div",
      {
        className: "item-preview",
        onClick: onClose,
      },
      createElement(
        "div",
        {
          className: "item-preview__content",
          onClick: (event) => event.stopPropagation(),
        },
        createElement(
          "button",
          {
            className: "item-preview__close",
            type: "button",
            onClick: onClose,
            "aria-label": "Close preview",
          },
          "×"
        ),
        createElement("img", {
          className: "item-preview__image",
          src: item.imageUrl,
          alt: item.name,
        }),
        createElement(
          "h2",
          { className: "item-preview__name" },
          item.name
        ),
        item.weatherCategory
          ? createElement(
              "p",
              { className: "item-preview__category" },
              "Weather: " +
                item.weatherCategory.charAt(0).toUpperCase() +
                item.weatherCategory.slice(1)
            )
          : null
      )
    ),
    document.body
  );
}

export default ItemModal;
