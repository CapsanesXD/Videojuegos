import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../context/FavoritesContext';

const initialGames = [
  { id: '1', title: 'Aventura Épica', price: '$19.99' },
  { id: '2', title: 'Carreras Turbo', price: '$9.99' },
  { id: '3', title: 'Estrategia Total', price: '$14.99' },
  { id: '4', title: 'Indie Relajante', price: '$4.99' },
];

export default function Catalog() {
  const [query, setQuery] = useState('');
  const { addFavorite, favorites } = useContext(FavoritesContext);

  const filtered = initialGames.filter((g) =>
    g.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2>Catálogo</h2>
      <div style={{ marginBottom: 12 }}>
        <input
          aria-label="buscar"
          placeholder="Buscar juegos..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <span style={{ marginLeft: 8 }}>Resultados: {filtered.length}</span>
      </div>

      <ul>
        {filtered.map((game) => (
          <li key={game.id} style={{ marginBottom: 10 }}>
            <Link to={`/game/${game.id}`}>{game.title}</Link> - {game.price}
            <button style={{ marginLeft: 8 }} onClick={() => addFavorite(game)}>
              Añadir a Favoritos
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
