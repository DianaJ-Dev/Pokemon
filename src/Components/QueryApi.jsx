import React, { useEffect } from 'react';
import { usePokemonList } from '../hook/usePokemonList';

export const QueryApi = ({ setList }) => {
  const { loading, error, pokemons } = usePokemonList(100, 0);

  useEffect(() => {
    if (pokemons.length > 0) {
      setList(pokemons);
    }
  }, [pokemons, setList]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return null;
};