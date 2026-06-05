import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import { FavoritesProvider } from './context/FavoritesContext';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Favorites from './pages/Favorites';
import Detail from './pages/Detail';

function Layout() {
  return (
    <div className="dashboard">
      <Header />
      <div className="main-layout">
        <Sidebar />
        <main className="content">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="game/:id" element={<Detail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </FavoritesProvider>
  );
}