export default function Sidebar() {
  const menuItems = ["Inicio", "Usuarios", "Reportes", "Configuración"];
 
  return (
<aside className="sidebar">
<ul>
        {menuItems.map((item, index) => (
<li key={index} className="menu-item">{item}</li>
        ))}
</ul>
</aside>
  );
}