import { useState, useEffect } from "react";
import "../App.css";
import { latitude, longitude } from "../constants";
import { getWeatherData } from "../utils/weatherApi";
import { defaultClothingItems } from "../utils/clothingItems";
import Header from "./Header";
import Main from "./Main";
import AddItemModal from "./AddItemModal";
import ItemModal from "./ItemModal";
import Footer from "./Footer";

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [clothingItems] = useState(defaultClothingItems);
  const [customItems, setCustomItems] = useState(() => {
    try {
      const savedItems = localStorage.getItem("wtwr-clothing-items");
      return savedItems ? JSON.parse(savedItems) : [];
    } catch {
      return [];
    }
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemToEdit, setItemToEdit] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isItemModalOpen, setIsItemModalOpen] = useState(false);

  useEffect(() => {
    getWeatherData(latitude, longitude)
      .then((data) => {
        setWeather(data);
      })
      .catch(() => {
        setError("Unable to load weather data.");
      });
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "wtwr-clothing-items",
      JSON.stringify(customItems)
    );
  }, [customItems]);

  useEffect(() => {
    if (!isModalOpen) {
      return undefined;
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsModalOpen(false);
        setItemToEdit(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  function handleSaveItem(item) {
    if (itemToEdit) {
      setCustomItems((items) =>
        items.map((savedItem) =>
          savedItem.id === item.id ? item : savedItem
        )
      );
    } else {
      setCustomItems((items) => [...items, item]);
    }

    setItemToEdit(null);
    setIsModalOpen(false);
  }

  function handleDeleteItem(itemId) {
    setCustomItems((items) =>
      items.filter((item) => item.id !== itemId)
    );
  }

  function handleCloseModal() {
    setIsModalOpen(false);
    setItemToEdit(null);
  }

  function handleOpenItemModal(item) {
    setSelectedItem(item);
    setIsItemModalOpen(true);
  }

  function handleCloseItemModal() {
    setIsItemModalOpen(false);
    setSelectedItem(null);
  }

  return (
    <div className="app">
      <Header
        city={weather?.city}
        onAddClick={() => {
          setItemToEdit(null);
          setIsModalOpen(true);
        }}
      />
      <Main
        weather={weather}
        error={error}
        clothingItems={clothingItems}
        customItems={customItems}
        onItemClick={handleOpenItemModal}
        onDeleteItem={handleDeleteItem}
        onEditItem={(item) => {
          setItemToEdit(item);
          setIsModalOpen(true);
        }}
      />
      <Footer />
      {isModalOpen && (
        <AddItemModal
          key={itemToEdit ? itemToEdit.id : "new"}
          itemToEdit={itemToEdit}
          onClose={handleCloseModal}
          onSaveItem={handleSaveItem}
        />
      )}
      {isItemModalOpen && selectedItem && (
        <ItemModal
          item={selectedItem}
          onClose={handleCloseItemModal}
        />
      )}
    </div>
  );
}

export default App;
