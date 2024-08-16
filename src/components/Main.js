import editImageBtn from "../images/lapiz.png";
import editProfileBtn from "../images/edit_profile.png";
import addBtn from "../images/add_icon.png";
import "../blocks/profile.css";
import "../blocks/popup.css";

import { useState, useEffect } from "react";
import api from "../utils/api";
import Card from "./Card";

export default function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function getUserInfo() {
      const response = await api.getProfileInfo();
      setUserName(response.name);
      setUserDescription(response.about);
      setUserAvatar(response.avatar);
    }
    getUserInfo();
  }, []);

  useEffect(() => {
    async function getCards() {
      const response = await api.getInitialCards();
      setCards(response);
    }
    getCards();
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__container">
          <img
            src={userAvatar}
            alt="Foto de perfil de un usuario que sube contenido de viajes"
            className="profile__face-image"
            id="image-profile"
            style={{ backgroundImage: `url(${userAvatar})` }}
          />
          <div
            className="profile__content-edit"
            id="image-content"
            onClick={props.onEditAvatarClick}
          >
            <img
              src={editImageBtn}
              alt="Logotipo de un lápiz para editar"
              className="profile__edit-pencil"
              id="image-edit-pencil"
            />
          </div>

          <div className="profile__data">
            <div className="profile__info">
              <h2 className="profile__name">{userName}</h2>
              <div
                className="profile__edit-data"
                onClick={props.onEditProfileClick}
              >
                <img
                  src={editProfileBtn}
                  alt="Botón en forma de lápiz que indica que se puede editar la información del perfil"
                  id="image-pencil"
                />
              </div>
            </div>
            <p className="profile__description">{userDescription}</p>
          </div>
          <button
            className="profile__add-picture"
            onClick={props.onAddPlaceClick}
          >
            <img
              src={addBtn}
              alt="Botón en forma de signo de + que indica que se puede agregar fotos a su galeria"
              id="image-add"
            />
          </button>
        </div>
      </section>
      <div className="gallery">
        {cards.map((card) => (
          <Card
            onCardClick={props.onCardClick}
            card={card}
            key={card._id}
            name={card.name}
            likes={card.likes}
            link={card.link}
          />
        ))}
      </div>
    </main>
  );
}
