import { createElement } from "react";
import "./Header.css";

function Header({ onAddClick }) {
  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });

  return createElement(
    "header",
    { className: "header" },
    createElement(
      "div",
      { className: "header__logo-container" },
      createElement("p", { className: "header__logo" }, "WTWR"),
      createElement(
        "p",
        { className: "header__date-location" },
        currentDate + ", Seattle"
      )
    ),
    createElement(
      "div",
      { className: "header__actions" },
      createElement(
        "button",
        {
          className: "header__add-clothes",
          onClick: onAddClick,
        },
        "+ Add clothes"
      ),
      createElement(
        "div",
        { className: "header__profile" },
        createElement(
          "p",
          { className: "header__username" },
          "David"
        ),
        createElement(
          "span",
          { className: "header__avatar" },
          "D"
        )
      )
    )
  );
}

export default Header;
