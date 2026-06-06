import React, { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';
import { Link } from 'react-router-dom';

export default function Favorites() {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  // Vista en caso de que no haya elementos guardados
  if (favorites.length === 0) {
    return (
      <div style={{ fontFamily: 'sans-serif', maxWidth: '700px', margin: '0 auto', padding: '20px', color: '#fff' }}>
        <h2>Mis Favoritos</h2>
        <p style={{ color: '#94a3b8', backgroundColor: '#1a202c', padding: '20px', borderRadius: '8px', border: '1px solid #2d3748' }}>
          No tienes juegos favoritos aún. ¡Explora el catálogo y añade los que te gusten!
        </p>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '700px', margin: '0 auto', padding: '20px', color: '#fff' }}>
      <h2 style={{ marginBottom: '20px' }}>Mis Favoritos</h2>
      
      {/* Lista con el mismo diseño que el catálogo */}
      <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {favorites.map((game) => (
          <li 
            key={game.id} 
            style={{ 
              display: 'flex', 
              alignItems: 'stretch', 
              backgroundColor: '#1a202c', 
              border: '1px solid #2d3748',
              borderRadius: '12px',
              overflow: 'hidden', 
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
            }}
          >
            {/* Imagen del juego en favoritos */}
            <img 
              src={game.image} 
              alt={game.title} 
              style={{ 
                width: '120px', 
                minWidth: '120px', 
                objectFit: 'cover', 
                backgroundColor: '#2d3748'
              }} 
            />

            {/* Contenedor de la información */}
            <div style={{ display: 'flex', flexDirection: 'column', padding: '20px', flexGrow: 1 }}>
              <div style={{ marginBottom: '10px' }}>
                <Link 
                  to={`/game/${game.id}`} 
                  style={{ fontSize: '19px', fontWeight: 'bold', textDecoration: 'none', color: '#38bdf8' }}
                >
                  {game.title}
                </Link>
                
                {/* Descripción recuperada del objeto */}
                <p style={{ color: '#94a3b8', fontSize: '14px', margin: '6px 0 0 0', lineHeight: '1.4' }}>
                  {game.description}
                </p>
              </div>
              
              {/* Contenedor inferior con el precio y el botón de eliminar */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '10px' }}>
                <span style={{ color: '#4ade80', fontWeight: 'bold', fontSize: '16px' }}>{game.price}</span>
                
                <button 
                  onClick={() => removeFavorite(game.id)}
                  style={{ 
                    padding: '8px 16px', 
                    backgroundColor: '#ef4444', // Color rojo para indicar "quitar/eliminar"
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '6px', 
                    cursor: 'pointer',
                    fontWeight: '600',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#dc2626'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#ef4444'}
                >
                  Quitar de Favoritos
                </button>
              </div>
            </div>

          </li>
        ))}
      </ul>
    </div>
  );
}