import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);

  function handleCardClick(card) {
    setIsImagePopupOpen(true);
    setSelectedCard(card);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onEditAvatarClick={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        name="avatar"
        title="Cambiar foto de perfil"
        nameBtn="Guardar"
      >
        <input
          type="url"
          className="popup__desc popup__input"
          id="input-url"
          name="url"
          placeholder="Enlace a la imagen"
          required
        />
        <span className="popup__error input-url-error"></span>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        name="profile"
        title="Edita perfil"
        nameBtn="Guardar"
      >
        <input
          type="text"
          className="popup__name popup__input"
          id="input-name"
          minLength="2"
          maxLength="40"
          name="name"
          required
          placeholder="Nombre"
        />
        <span className="popup__error input-name-error"></span>
        <input
          type="text"
          className="popup__desc popup__input"
          id="input-desc"
          name="about"
          minLength="2"
          maxLength="200"
          required
          placeholder="Acerca de mí"
        />
        <span className="popup__error input-desc-error"></span>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        name="place"
        title="Nuevo Lugar"
        nameBtn="Crear"
      >
        <input
          type="text"
          className="popup__name popup__input"
          id="input-place"
          name="title"
          placeholder="Titulo"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="popup__error input-place-error"></span>
        <input
          type="url"
          className="popup__desc popup__input"
          id="input-link"
          name="link"
          placeholder="Enlace a la imagen"
          required
        />
        <span className="popup__error input-link-error"></span>
      </PopupWithForm>

      <ImagePopup
        isOpen={isImagePopupOpen}
        link={selectedCard.link}
        title={selectedCard.name}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
