import React from 'react';
import  '../App';

export const PokemonCard = ({ id, name, image, onClick   }) => {
  return (
    <div className="pokemon-card" onClick={() => onClick(id)}>
      <img className="img-card" src={image} alt={name} />
      <div className="pokemon-info">
        <h2>{name}</h2>
        <span>#{id.toString().padStart(3, '0')}</span>
      </div>
    </div>
  );
}

