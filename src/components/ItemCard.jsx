import { createElement, useState, Fragment } from "react";
import "./ItemCard.css";
import ItemModal from "./ItemModal";

function ItemCard({ item, onDelete, onEdit }) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return createElement(
    Fragment,
    null,
    createElement(
      "article",
      { className: "item-card" },
      createElement(
        "div",
        { className: "item-card__header" },
        createElement("h3", { className: "item-card__name" }, item.name),
        item.weatherCategory
          ? createElement(
              "span",
              { className: "item-card__category" },
              item.weatherCategory.charAt(0).toUpperCase() +
                item.weatherCategory.slice(1)
            )
          : null,
        onEdit
          ? createElement(
              "button",
              {
                className: "item-card__edit",
                type: "button",
                onClick: onEdit,
                "aria-label": "Edit " + item.name,
              },
              "Edit"
            )
          : null,
        onDelete
          ? createElement(
              "button",
              {
                className: "item-card__delete",
                type: "button",
                onClick: onDelete,
                "aria-label": "Delete " + item.name,
              },
              "×"
            )
          : null
      ),
      createElement("img", {
        className: "item-card__image",
        src: item.imageUrl,
        alt: item.name,
        onClick: () => setIsPreviewOpen(true),
      })
    ),
    isPreviewOpen
      ? createElement(ItemModal, {
          item,
          onClose: () => setIsPreviewOpen(false),
        })
      : null
  );
}

export default ItemCard;
