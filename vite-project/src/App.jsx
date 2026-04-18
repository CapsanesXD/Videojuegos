import Header from './Components/Header';

import Sidebar from './Components/Sidebar';

import Footer from './Components/Footer';
 
export default function App() {

  return (
<div className="dashboard">
<Header />
<div className="main-content">
<Sidebar />
<section className="content">
<h2>Bienvenido al Dashboard de juegos.com</h2>
<p>Este es el espacio principal de la aplicación.</p>
</section>
</div>
<Footer />
</div>

  );

}

 