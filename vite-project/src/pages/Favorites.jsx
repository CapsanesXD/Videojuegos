import React, { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';
import { Link } from 'react-router-dom';

export default function Favorites() {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  if (favorites.length === 0) {
    return (
      <div>
        <h2>Favoritos</h2>
        <p>No tienes juegos favoritos aún.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Favoritos</h2>
      <ul>
        {favorites.map((g) => (
          <li key={g.id}>
            <Link to={`/game/${g.id}`}>{g.title}</Link>
            <button style={{ marginLeft: 8 }} onClick={() => removeFavorite(g.id)}>
              Quitar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
