import "./ModalWithForm.css";

function ModalWithForm({
  title,
  onClose,
  onSubmit,
  submitText,
  children,
}) {
  return (
    <div className="modal" onClick={onClose}>
      <div
        className="modal__content"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        <h2 className="modal__title">{title}</h2>

        <form className="modal__form" onSubmit={onSubmit}>
          {children}

          <button className="modal__submit" type="submit">
            {submitText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
