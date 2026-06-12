import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { games } from '../data/games';

export default function Detail() {
  const { id } = useParams();
  const game = games.find((item) => item.id === id);

  if (!game) {
    return (
      <div>
        <h2>Detalle</h2>
        <p>Juego no encontrado.</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', color: '#f8fafc' }}>
      <div
        style={{
          display: 'grid',
          gap: '28px',
          borderRadius: '24px',
          overflow: 'hidden',
          background: '#111827',
          boxShadow: '0 24px 80px rgba(0, 0, 0, 0.32)',
        }}
      >
        <img src={game.image} alt={game.title} style={{ width: '100%', height: '420px', objectFit: 'cover' }} />
        <div style={{ padding: '32px', display: 'grid', gap: '18px' }}>
          <div>
            <h2 style={{ margin: 0, fontSize: '2.6rem', color: '#f8fafc' }}>{game.title}</h2>
            <p style={{ margin: '14px 0 0', color: '#94a3b8', fontSize: '1rem', lineHeight: '1.75' }}>{game.details}</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
            <span style={{ color: '#4ade80', fontWeight: '700', fontSize: '1.05rem' }}>{game.price}</span>
            <Link to="/catalog" className="btn" style={{ padding: '0.85rem 1.4rem', background: '#66c0f4', color: '#0b1220' }}>
              Volver al catálogo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
