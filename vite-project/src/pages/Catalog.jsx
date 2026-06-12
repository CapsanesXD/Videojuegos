import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../context/FavoritesContext';
import { games } from '../data/games';

export default function Catalog() {
  const [query, setQuery] = useState('');
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);

  const filtered = games.filter((g) =>
    g.title.toLowerCase().includes(query.toLowerCase()) ||
    g.description.toLowerCase().includes(query.toLowerCase())
  );

  const isFavorite = (gameId) => favorites.some((item) => item.id === gameId);

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '1200px', margin: '0 auto', padding: '20px 0', color: '#fff' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '28px' }}>
        <h2 style={{ margin: 0, color: '#f8fafc' }}>Catálogo de Juegos</h2>
        <p style={{ margin: 0, color: '#94a3b8', maxWidth: '720px' }}>
          Explora la colección con filtros rápidos y añade tus títulos favoritos con un solo clic.
        </p>
      </div>

      <div style={{ marginBottom: 28, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px' }}>
        <input
          aria-label="buscar"
          placeholder="Buscar juegos..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            padding: '14px 16px',
            width: '100%',
            maxWidth: '320px',
            borderRadius: '12px',
            border: '1px solid #2d3748',
            backgroundColor: '#131a24',
            color: '#f8fafc',
            boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.04)',
          }}
        />
        <span style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Resultados: {filtered.length}</span>
      </div>

      <div className="catalog-grid">
        {filtered.map((game) => {
          const favorite = isFavorite(game.id);
          return (
            <article key={game.id} className="game-card">
              <Link to={`/game/${game.id}`} style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
                <div style={{ position: 'relative', minHeight: '190px', overflow: 'hidden' }}>
                  <img
                    src={game.image}
                    alt={game.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.35s ease' }}
                  />
                </div>
                <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', gap: '14px', flexGrow: 1 }}>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '1.18rem', color: '#f8fafc' }}>{game.title}</h3>
                    <p style={{ margin: '12px 0 0', color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.7' }}>
                      {game.description}
                    </p>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', marginTop: 'auto' }}>
                    <span style={{ color: '#4ade80', fontWeight: '700' }}>{game.price}</span>
                    <span style={{ color: '#66c0f4', fontWeight: '700' }}>Ver</span>
                  </div>
                </div>
              </Link>

              <div style={{ padding: '0 22px 22px', display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => (favorite ? removeFavorite(game.id) : addFavorite(game))}
                  style={{
                    width: '100%',
                    padding: '12px 0',
                    borderRadius: '999px',
                    border: 'none',
                    fontWeight: '700',
                    cursor: 'pointer',
                    color: '#fff',
                    backgroundColor: favorite ? '#6b7280' : '#66c0f4',
                    transition: 'background-color 0.2s ease, transform 0.2s ease',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-1px)';
                    e.currentTarget.style.backgroundColor = favorite ? '#4b5563' : '#4ea8df';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.backgroundColor = favorite ? '#6b7280' : '#66c0f4';
                  }}
                >
                  {favorite ? 'Quitar de Favoritos' : 'Añadir a Favoritos'}
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
