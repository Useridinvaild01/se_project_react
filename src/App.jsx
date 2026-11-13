import { useState, useEffect, createElement } from "react";

import "./App.css";

import { latitude, longitude } from "./constants";

import { getWeatherData } from "./utils/weatherApi";

import Header from "./components/Header";

import Main from "./components/Main";

import AddItemModal from "./components/AddItemModal";
import Footer from "./components/Footer";

function App() {
  const [weather, setWeather] = useState(null);

  const [error, setError] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [itemToEdit, setItemToEdit] = useState(null);

  const [customItems, setCustomItems] = useState(() => {
    try {
      const savedItems = localStorage.getItem("wtwr-clothing-items");
      return savedItems ? JSON.parse(savedItems) : [];
    } catch {
      return [];
    }
  });

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

  return createElement(
    "div",
    { className: "app" },
    createElement(Header, {
      onAddClick: () => {
        setItemToEdit(null);
        setIsModalOpen(true);
      },
    }),
    createElement(Main, {
      weather,
      error,
      customItems,
      onDeleteItem: handleDeleteItem,
      onEditItem: (item) => {
        setItemToEdit(item);
        setIsModalOpen(true);
      },
    }),
    createElement(Footer),
    isModalOpen
      ? createElement(AddItemModal, {
          key: itemToEdit ? itemToEdit.id : "new",
          itemToEdit,
          onClose: handleCloseModal,
          onSaveItem: handleSaveItem,
        })
      : null
  );
}

export default App;
