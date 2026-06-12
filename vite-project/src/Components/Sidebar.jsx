import { NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

export default function Sidebar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const menu = [
    { to: '/', label: 'Inicio' },
    { to: '/catalog', label: 'Catálogo' },
    { to: '/favorites', label: 'Favoritos' },
  ];

  const clockString = time.toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return (
    <aside className="sidebar">
      <div>
        <ul>
          {menu.map((m) => (
            <li key={m.to} className="menu-item">
              <NavLink to={m.to}>{m.label}</NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-footer">
        <div className="clock-card">
          <span style={{ color: '#94a3b8', fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Hora actual
          </span>
          <strong style={{ display: 'block', marginTop: '0.55rem', fontSize: '1.35rem', color: '#f8fafc' }}>{clockString}</strong>
        </div>
      </div>
    </aside>
  );
}
