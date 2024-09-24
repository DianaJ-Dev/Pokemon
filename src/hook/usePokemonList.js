import { useQuery } from '@apollo/client';
import { GET_POKEMON_LIST } from '../queries';

export const usePokemonList = (limit = 100, offset = 0) => {
  const { loading, error, data } = useQuery(GET_POKEMON_LIST, {
    variables: { limit, offset },
  });

  return {
    loading,
    error,
    pokemons: data ? data.pokemon_v2_pokemon : [],
  };
};