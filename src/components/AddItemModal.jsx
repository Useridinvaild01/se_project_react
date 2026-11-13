import { useState, createElement } from "react";
import "./AddItemModal.css";
import ModalWithForm from "./ModalWithForm";

function AddItemModal({ onClose, onSaveItem, itemToEdit }) {
  const [name, setName] = useState(itemToEdit?.name || "");
  const [imageUrl, setImageUrl] = useState(itemToEdit?.imageUrl || "");
  const [weatherCategory, setWeatherCategory] = useState(
    itemToEdit?.weatherCategory || "warm"
  );

  function handleSubmit(event) {
    event.preventDefault();

    onSaveItem({
      id: itemToEdit ? itemToEdit.id : Date.now(),
      name,
      imageUrl,
      weatherCategory,
    });
  }

  return createElement(
    ModalWithForm,
    {
      title: itemToEdit ? "Edit garment" : "New garment",
      onClose,
    },
    createElement(
      "form",
      { className: "modal__form", onSubmit: handleSubmit },
      createElement("label", { htmlFor: "item-name" }, "Name"),
      createElement("input", {
        id: "item-name",
        type: "text",
        value: name,
        onChange: (event) => setName(event.target.value),
        placeholder: "Enter item name",
        required: true,
      }),
      createElement("label", { htmlFor: "item-image" }, "Image URL"),
      createElement("input", {
        id: "item-image",
        type: "url",
        value: imageUrl,
        onChange: (event) => setImageUrl(event.target.value),
        placeholder: "https://example.com/image.jpg",
        required: true,
      }),
      createElement("label", { htmlFor: "item-weather" }, "Weather type"),
      createElement(
        "select",
        {
          id: "item-weather",
          value: weatherCategory,
          onChange: (event) => setWeatherCategory(event.target.value),
          required: true,
        },
        createElement("option", { value: "hot" }, "Hot"),
        createElement("option", { value: "warm" }, "Warm"),
        createElement("option", { value: "cold" }, "Cold")
      ),
      createElement(
        "button",
        { className: "modal__submit", type: "submit" },
        itemToEdit ? "Save changes" : "Add garment"
      )
    )
  );
}

export default AddItemModal;
