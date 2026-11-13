import { createElement } from "react";
import "./ModalWithForm.css";

function ModalWithForm({ title, onClose, children }) {
  return createElement(
    "div",
    { className: "modal", onClick: onClose },
    createElement(
      "div",
      {
        className: "modal__content",
        onClick: (event) => event.stopPropagation(),
      },
      createElement(
        "button",
        {
          className: "modal__close",
          type: "button",
          onClick: onClose,
          "aria-label": "Close",
        },
        "×"
      ),
      createElement("h2", { className: "modal__title" }, title),
      children
    )
  );
}

export default ModalWithForm;
