import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../Store/favoriteSlice';

export const PokemonDetail = ({ pokemon, onClose }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);
  const isFavorite = favorites.some(fav => fav.id === pokemon.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(pokemon));
    } else {
      dispatch(addFavorite(pokemon));
    }
  };

  useEffect(() => {
    console.log('Favoritos actuales:', favorites);
  }, [favorites]);

  return (
    <div className="pokemon-card">
      <header className="pokemon-header">
        <div className="back-arrow" onClick={onClose}>←</div>
        <div className={`heart-icon ${isFavorite ? 'favorite' : ''}`} onClick={toggleFavorite}>
          ♥
        </div>
        <h1>{pokemon.name}</h1>
        <span className="pokemon-id">{pokemon.id}</span>
      </header>

      <img
        src={pokemon.pokemon_v2_pokemonsprites[0]?.sprites.front_default}
        alt={pokemon.name}
        className="pokemon-image"
      />

      <div className="pokemon-types">
        {pokemon.pokemon_v2_pokemontypes.map(type => (
          <span className="type" key={type.pokemon_v2_type.name}>
            {type.pokemon_v2_type.name}
          </span>
        ))}
      </div>

      <section className="pokemon-about">
        <h2>About</h2>
        <div className="pokemon-stats">
          <div>
            <p>Weight</p>
            <p>{pokemon.weight} kg</p>
          </div>
          <div>
            <p>Height</p>
            <p>{pokemon.height} m</p>
          </div>
          <div>
            <p>Moves</p>
            <p>Chlorophyll, Overgrow</p>
          </div>
        </div>
        <p className="pokemon-description">
          {pokemon.pokemon_v2_pokemonspecy.pokemon_v2_pokemonspeciesflavortexts[0]?.flavor_text}
        </p>
      </section>

      <section className="pokemon-base-stats">
        <h2>Base Stats</h2>
        {pokemon.pokemon_v2_pokemonstats.map(stat => (
          <div className="stat" key={stat.pokemon_v2_stat.name}>
            <p>{stat.pokemon_v2_stat.name}: {stat.base_stat}</p>
            <div className="stat-bar">
              <div
                className="stat-fill"
                style={{ width: `${stat.base_stat}%` }}
              ></div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default PokemonDetail;