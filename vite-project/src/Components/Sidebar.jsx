import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  const menu = [
    { to: '/', label: 'Inicio' },
    { to: '/catalog', label: 'Catálogo' },
    { to: '/favorites', label: 'Favoritos' },
  ];

  return (
    <aside className="sidebar">
      <ul>
        {menu.map((m) => (
          <li key={m.to} className="menu-item">
            <NavLink to={m.to}>{m.label}</NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}