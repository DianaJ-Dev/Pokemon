import React from 'react';

export const Favorite = ({ favorites }) => {
  return (
    <div>
      {favorites.length > 0 ? (
        favorites.map(fav => (
          <div key={fav.id}>
            <p>{fav.name}</p>
            <img src={fav.pokemon_v2_pokemonsprites[0]?.sprites.front_default} alt={fav.name} />
          </div>
        ))
      ) : (
        <p>No hay favoritos.</p>
      )}
    </div>
  );
};