import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../context/FavoritesContext';

// 1. Array de datos actualizado con descripciones
const initialGames = [
  { 
    id: '1', 
    title: 'Aventura Épica', 
    price: '$19.99', 
    description: 'Embárcate en un viaje inolvidable a través de montañas sagradas y paisajes ancestrales llenos de misterio.',
    image: 'https://thumbs.dreamstime.com/b/excursionista-hacer-senderismo-actividad-en-la-monta%C3%B1a-jap%C3%B3n-aventura-%C3%A9pica-de-trekking-del-norte-alpes-nagano-con-naturaleza-208130179.jpg' 
  },
  { 
    id: '2', 
    title: 'Carreras Turbo', 
    price: '$9.99', 
    description: 'Siente la adrenalina de la alta velocidad nocturna en circuitos urbanos diseñados para los pilotos más exigentes.',
    image: 'https://cdn.pixabay.com/photo/2022/07/01/08/37/race-cars-7295200_1280.jpg' 
  },
  { 
    id: '3', 
    title: 'Estrategia Total', 
    price: '$14.99', 
    description: 'Dirige tus ejércitos, gestiona tus recursos con precisión y conquista imperios en este simulador táctico en tiempo real.',
    image: 'https://elcomercio.pe/resizer/_tQO_8JajE_yjw3eUQdcU-AsJL4=/1200x1200/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/IGFYHC3JD5GLVCMPQK2MYFE3Q4.jpg' 
  },
  { 
    id: '4', 
    title: 'Indie Relajante', 
    price: '$4.99', 
    description: 'Desconéctate del mundo con puzles armónicos, una banda sonora retro envolvente y mecánicas libres de estrés.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSufI3pVmseoliHh5tz6OCT0dwtUB3TgdDmp9UdukTgnyJ1ZNAaXSf505iZkZfrfvu1ZnRzT2m9Q2rRTixK-x_9NekzMtje3tdzbX3o4Q&s=10' 
  },

    { 
    id: '5', 
    title: 'abogados jjk', 
    price: '$4.99', 
    description: 'Desconéctate del mundo con puzles armónicos, una banda sonora retro envolvente y mecánicas libres de estrés.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5sEG0u3_8CUAQhbz0x-VTFBjP34i_w1V0HQ&s' 
  },
];

export default function Catalog() {
  const [query, setQuery] = useState('');
  const { addFavorite } = useContext(FavoritesContext);

  const filtered = initialGames.filter((g) =>
    g.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '700px', margin: '0 auto', padding: '20px', color: '#fff' }}>
      <h2 style={{ marginBottom: '10px' }}>Catálogo de Juegos</h2>
      
      {/* Barra de búsqueda */}
      <div style={{ marginBottom: 25, display: 'flex', alignItems: 'center', gap: '15px' }}>
        <input
          aria-label="buscar"
          placeholder="Buscar juegos..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ 
            padding: '10px 14px', 
            width: '250px', 
            borderRadius: '6px', 
            border: '1px solid #444', 
            backgroundColor: '#1e2530', 
            color: '#fff' 
          }}
        />
        <span style={{ color: '#aaa', fontSize: '14px' }}>Resultados: {filtered.length}</span>
      </div>

      {/* Lista del catálogo */}
      <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {filtered.map((game) => (
          <li 
            key={game.id} 
            style={{ 
              display: 'flex', 
              alignItems: 'stretch', // Estira la imagen y el contenido para que midan lo mismo de alto
              backgroundColor: '#1a202c', // Fondo oscuro que combina con tu app
              border: '1px solid #2d3748',
              borderRadius: '12px',
              overflow: 'hidden', // Mantiene los bordes redondeados limpios
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
            }}
          >
            {/* Imagen más grande (120px) */}
            <img 
              src={game.image} 
              alt={game.title} 
              style={{ 
                width: '120px', 
                minWidth: '120px', // Evita que la imagen se encoja si el texto es largo
                objectFit: 'cover', 
                backgroundColor: '#2d3748'
              }} 
            />

            {/* Contenedor de la información del juego */}
            <div style={{ display: 'flex', flexDirection: 'column', padding: '20px', flexGrow: 1, justifyHeight: 'space-between' }}>
              <div style={{ marginBottom: '10px' }}>
                <Link 
                  to={`/game/${game.id}`} 
                  style={{ fontSize: '19px', fontWeight: 'bold', textDecoration: 'none', color: '#38bdf8' }}
                >
                  {game.title}
                </Link>
                
                {/* Nueva Descripción del juego */}
                <p style={{ color: '#94a3b8', fontSize: '14px', margin: '6px 0 0 0', lineHeight: '1.4' }}>
                  {game.description}
                </p>
              </div>
              
              {/* Contenedor inferior: Precio y Botón alineados */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '10px' }}>
                <span style={{ color: '#4ade80', fontWeight: 'bold', fontSize: '16px' }}>{game.price}</span>
                
                <button 
                  onClick={() => addFavorite(game)}
                  style={{ 
                    padding: '8px 16px', 
                    backgroundColor: '#06b6d4', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '6px', 
                    cursor: 'pointer',
                    fontWeight: '600',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#0891b2'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#06b6d4'}
                >
                  Añadir a Favoritos
                </button>
              </div>
            </div>

          </li>
        ))}
      </ul>
    </div>
  );
}