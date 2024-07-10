
import '../App.css';
import logoImage from './logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
      <img src={logoImage} alt="Logo" className="logo-image" />
      </div>
      <nav className="nav-links">
        <a href="#link1" className="nav-button">SHOP</a>
        <a href="#link2" className="nav-button">ABOUT</a>
      </nav>
    </header>
  );
}

export default Header;
