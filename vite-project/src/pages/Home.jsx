import React from 'react';
import { Link } from 'react-router-dom';
import { games } from '../data/games';

export default function Home() {
  const hero = games[0];
  const novedades = games.slice(1, 4);

  return (
    <div style={{ display: 'grid', gap: '36px', maxWidth: '1200px' }}>
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '28px',
          minHeight: '420px',
          backgroundImage: `linear-gradient(180deg, rgba(3, 12, 25, 0.88), rgba(5, 11, 18, 0.96)), url(${hero.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow: '0 24px 80px rgba(0, 0, 0, 0.35)',
        }}
      >
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            padding: '48px 42px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '20px',
            color: '#f8fafc',
            minHeight: '420px',
          }}
        >
          <span
            style={{
              color: '#66c0f4',
              fontWeight: '700',
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              fontSize: '0.82rem',
            }}
          >
            Destacado
          </span>
          <h1
            style={{
              fontSize: 'clamp(3rem, 5vw, 4.8rem)',
              lineHeight: '0.92',
              margin: 0,
              maxWidth: '74%',
            }}
          >
            {hero.title}
          </h1>
          <p style={{ maxWidth: '680px', color: '#cbd5e1', fontSize: '1rem', lineHeight: '1.75' }}>
            {hero.description}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <span
              style={{
                padding: '0.72rem 1rem',
                borderRadius: '999px',
                background: 'rgba(102, 192, 244, 0.14)',
                color: '#66c0f4',
                fontWeight: '700',
                border: '1px solid rgba(102, 192, 244, 0.24)',
                fontSize: '0.95rem',
              }}
            >
              {hero.price}
            </span>
            <Link
              to={`/game/${hero.id}`}
              style={{
                padding: '1rem 1.8rem',
                borderRadius: '999px',
                background: '#66c0f4',
                color: '#0b1220',
                textDecoration: 'none',
                fontWeight: '700',
                boxShadow: '0 18px 40px rgba(102, 192, 244, 0.22)',
                transition: 'background-color 0.25s ease, transform 0.25s ease',
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#4ea8df')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#66c0f4')}
            >
              Ver artículo
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '16px', flexWrap: 'wrap' }}>
          <div>
            <h2 style={{ margin: '0 0 8px', color: '#f8fafc' }}>Novedades</h2>
            <p style={{ margin: 0, color: '#94a3b8' }}>
              Descubre los lanzamientos más recientes y las recomendaciones más destacadas.
            </p>
          </div>
          <Link
            to="/catalog"
            style={{
              padding: '0.9rem 1.4rem',
              borderRadius: '999px',
              background: 'rgba(102, 192, 244, 0.12)',
              color: '#66c0f4',
              textDecoration: 'none',
              fontWeight: '700',
              border: '1px solid rgba(102, 192, 244, 0.22)',
              transition: 'background-color 0.2s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'rgba(102, 192, 244, 0.18)')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'rgba(102, 192, 244, 0.12)')}
          >
            Ver catálogo completo
          </Link>
        </div>

        <div
          style={{
            display: 'grid',
            gap: '24px',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            marginTop: '24px',
          }}
        >
          {novedades.map((game) => (
            <article
              key={game.id}
              style={{
                background: '#161b22',
                border: '1px solid #2f3a4a',
                borderRadius: '20px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                minHeight: '360px',
                boxShadow: '0 18px 42px rgba(0, 0, 0, 0.25)',
              }}
              className="game-card"
            >
              <div style={{ position: 'relative', minHeight: '200px', overflow: 'hidden' }}>
                <img
                  src={game.image}
                  alt={game.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.35s ease' }}
                />
              </div>

              <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', gap: '16px', flexGrow: 1 }}>
                <div>
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '0.34rem 0.75rem',
                      borderRadius: '999px',
                      background: 'rgba(102, 192, 244, 0.12)',
                      color: '#66c0f4',
                      fontWeight: '700',
                      fontSize: '0.8rem',
                      textTransform: 'uppercase',
                    }}
                  >
                    Nuevo
                  </span>
                  <h3 style={{ margin: '14px 0 10px', color: '#f8fafc', fontSize: '1.35rem' }}>{game.title}</h3>
                  <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.65' }}>
                    {game.description}
                  </p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', marginTop: 'auto' }}>
                  <span style={{ color: '#4ade80', fontWeight: '700' }}>{game.price}</span>
                  <Link
                    to={`/game/${game.id}`}
                    style={{ color: '#66c0f4', textDecoration: 'none', fontWeight: '700' }}
                  >
                    Ver artículo →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
