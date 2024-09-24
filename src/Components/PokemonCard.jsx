import React from 'react';

export const PokemonCard = ({ id, name, image, onClick   }) => {
  return (
    <div className="pokemon-card" onClick={() => onClick(id)}>
      <img src={image} alt={name} />
      <div className="pokemon-info">
        <h2>{name}</h2>
        <span>#{id.toString().padStart(3, '0')}</span>
      </div>
    </div>
  );
}

