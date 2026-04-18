import logo from '../assets/steaam.jpg';
export default function Header() {
  const title = "Juegos para ti";
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <h1>{title}</h1>
    </header>
  );}