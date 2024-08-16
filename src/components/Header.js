import imageLogo from "../images/logo_header.png";
import "../blocks/header.css";

export default function Header() {
  return (
    <header className="header">
      <img
        src={imageLogo}
        alt="Logototipo de una Página iteractiva"
        className="header__logo"
        id="image-logo"
      />
      <span className="header__item-divider"></span>
    </header>
  );
}
