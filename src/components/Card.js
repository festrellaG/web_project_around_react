import trashBtn from "../images/trash.png";

export default function Card({ _id, name, likes, link, onCardClick, card }) {
  function handleClick() {
    onCardClick(card);
  }
  return (
    <div className="gallery__item" key={_id}>
      <img
        src={trashBtn}
        alt="Bote de basura para eliminar una foto"
        className="gallery__trash gallery__image-trash"
      />
      <img
        src={link}
        style={{ backgroundImage: `url(${link})` }}
        alt="desc"
        className="gallery__image"
        onClick={handleClick}
      />
      <div className="gallery__content-text">
        <h2 className="gallery__title-item">{name}</h2>
        <div className="gallery__container">
          <button className="gallery__like"></button>
          <span className="gallery__like-number">{likes.length}</span>
        </div>
      </div>
    </div>
  );
}
