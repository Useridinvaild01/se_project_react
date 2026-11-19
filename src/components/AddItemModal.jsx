import { useState } from "react";
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

  return (
    <ModalWithForm
      title={itemToEdit ? "Edit garment" : "New garment"}
      onClose={onClose}
      onSubmit={handleSubmit}
      submitText={itemToEdit ? "Save changes" : "Add garment"}
    >
      <label htmlFor="item-name">Name</label>
      <input
        id="item-name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter item name"
        required
      />

      <label htmlFor="item-image">Image URL</label>
      <input
        id="item-image"
        type="url"
        value={imageUrl}
        onChange={(event) => setImageUrl(event.target.value)}
        placeholder="https://example.com/image.jpg"
        required
      />

      <label htmlFor="item-weather">Weather type</label>
      <select
        id="item-weather"
        value={weatherCategory}
        onChange={(event) => setWeatherCategory(event.target.value)}
        required
      >
        <option value="hot">Hot</option>
        <option value="warm">Warm</option>
        <option value="cold">Cold</option>
      </select>
    </ModalWithForm>
  );
}

export default AddItemModal;
