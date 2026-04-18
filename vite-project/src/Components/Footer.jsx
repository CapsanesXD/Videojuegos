export default function Footer() {
  const year = new Date().getFullYear();
 
  return (
<footer className="footer">
<p>© {year} Proyecto Integrador - Todos los derechos reservados</p>
</footer>
  );
}