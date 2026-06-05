import React from 'react';
import { useParams } from 'react-router-dom';

const allGames = {
  '1': { id: '1', title: 'Aventura Épica', desc: 'Un juego de aventuras inmersivo.' },
  '2': { id: '2', title: 'Carreras Turbo', desc: 'Velocidad y nitro por todas partes.' },
  '3': { id: '3', title: 'Estrategia Total', desc: 'Planifica y conquista.' },
  '4': { id: '4', title: 'Indie Relajante', desc: 'Relájate y disfruta.' },
};

export default function Detail() {
  const { id } = useParams();
  const game = allGames[id];

  if (!game) {
    return (
      <div>
        <h2>Detalle</h2>
        <p>Juego no encontrado.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>{game.title}</h2>
      <p>{game.desc}</p>
    </div>
  );
}
