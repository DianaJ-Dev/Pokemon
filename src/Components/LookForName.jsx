import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { SEARCH_POKEMON_BY_NAME } from '../queries';
import '../App.css';

export const LookForName = ({ setList }) => {
  
  const [input, setInput] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [searchPokemon, { called, loading, data, error }] = useLazyQuery(SEARCH_POKEMON_BY_NAME, {
    variables: { name: `%${input}%` },  // Búsqueda con % para coincidencias parciales
    onCompleted: (data) => {
      setList(data.pokemon_v2_pokemon);
    },
  });

  // Manejar cambios en el input
  const onInputChange = (e) => {
    const inputValue = e.target.value;
    setInput(inputValue);

    // Mostrar el mensaje si la longitud es menor a 3
    if (inputValue.length < 3) {
      setShowMessage(true);
    } else {
      setShowMessage(false);
      searchPokemon();
    }

    if (inputValue.length === 0) {
      setList([]);  // Limpiar la lista si el input está vacío
    }
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input className="input"
          type="text"
          placeholder="Nombre de Pokémon"
          value={input}
          onChange={onInputChange}
        />
      </form>
      
      {showMessage && (
        <p>minimo 3 letras para buscar.</p>
      )}

      {loading && <p>Cargando...</p>}
      {error && <p>Error: {error.message}</p>}
      {called && data && data.pokemon_v2_pokemon.length === 0 && (
        <p>No se encontraron Pokémon con ese nombre.</p>
      )}
    </div>
  );
};