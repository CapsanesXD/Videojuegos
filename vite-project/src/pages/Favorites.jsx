import React, { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';
import { Link } from 'react-router-dom';

export default function Favorites() {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  if (favorites.length === 0) {
    return (
      <div style={{ fontFamily: 'sans-serif', maxWidth: '820px', margin: '0 auto', padding: '20px', color: '#fff' }}>
        <h2 style={{ marginBottom: '16px', color: '#f8fafc' }}>Mis Favoritos</h2>
        <p style={{ color: '#94a3b8', backgroundColor: '#111827', padding: '24px', borderRadius: '16px', border: '1px solid #2d3748' }}>
          No tienes juegos favoritos aún. ¡Explora el catálogo y añade los que te gusten para verlos aquí.
        </p>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '1200px', margin: '0 auto', padding: '20px 0', color: '#fff' }}>
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ margin: 0, color: '#f8fafc' }}>Mis Favoritos</h2>
        <p style={{ margin: '10px 0 0', color: '#94a3b8' }}>
          Aquí tienes los juegos guardados en tu lista de favoritos.
        </p>
      </div>

      <div style={{ display: 'grid', gap: '24px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        {favorites.map((game) => (
          <article key={game.id} className="game-card">
            <Link to={`/game/${game.id}`} style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
              <div style={{ position: 'relative', minHeight: '180px', overflow: 'hidden' }}>
                <img
                  src={game.image}
                  alt={game.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.35s ease' }}
                />
              </div>
              <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', gap: '14px', flexGrow: 1 }}>
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#f8fafc' }}>{game.title}</h3>
                  <p style={{ margin: '10px 0 0', color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.7' }}>
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
                onClick={() => removeFavorite(game.id)}
                style={{
                  width: '100%',
                  padding: '12px 0',
                  borderRadius: '999px',
                  border: 'none',
                  fontWeight: '700',
                  cursor: 'pointer',
                  color: '#fff',
                  backgroundColor: '#ef4444',
                  transition: 'background-color 0.2s ease, transform 0.2s ease',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.backgroundColor = '#dc2626';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.backgroundColor = '#ef4444';
                }}
              >
                Quitar de Favoritos
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
