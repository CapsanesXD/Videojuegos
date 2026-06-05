import logo from '../assets/steaam.jpg';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';

export default function Header() {
  const title = 'Juegos para ti';
  const { favorites } = useContext(FavoritesContext);

  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <h1>{title}</h1>
      <nav className="top-nav">
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/catalog" style={{ marginLeft: 8 }}>Catálogo</NavLink>
        <NavLink to="/favorites" style={{ marginLeft: 8 }}>
          Favoritos ({favorites.length})
        </NavLink>
      </nav>
    </header>
  );
}