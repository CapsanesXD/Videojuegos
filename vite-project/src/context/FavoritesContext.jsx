import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  function addFavorite(game) {
    setFavorites((prev) => {
      if (prev.find((g) => g.id === game.id)) return prev;
      return [...prev, game];
    });
  }

  function removeFavorite(id) {
    setFavorites((prev) => prev.filter((g) => g.id !== id));
  }

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
