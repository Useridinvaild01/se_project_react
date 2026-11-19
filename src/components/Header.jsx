import "./Header.css";

function Header({ onAddClick, city }) {
  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__logo-container">
        <p className="header__logo">WTWR</p>
        <p className="header__date-location">
          {currentDate}, {city || "Loading location..."}
        </p>
      </div>

      <div className="header__actions">
        <button
          className="header__add-clothes"
          onClick={onAddClick}
        >
          + Add clothes
        </button>

        <div className="header__profile">
          <p className="header__username">David</p>
          <span className="header__avatar">D</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
