import { gql } from '@apollo/client';

export const GET_POKEMON_LIST = gql`
  query GetPokemonList($limit: Int, $offset: Int) {
    pokemon_v2_pokemon(limit: $limit, offset: $offset) {
      id
      name
      height
      weight
      base_experience
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonstats {
        base_stat
        pokemon_v2_stat {
          name
        }
      }
      pokemon_v2_pokemonspecy {
        pokemon_v2_pokemonspeciesflavortexts(where: {language_id: {_eq: 9}}, limit: 1) {
          flavor_text
        }
      }
      pokemon_v2_pokemonsprites {
        sprites
      }
    }
  }
`;

export const SEARCH_POKEMON_BY_NAME = gql`
  query searchPokemonByName($name: String!) {
    pokemon_v2_pokemon(where: { name: { _ilike: $name } }) {
      id
        name
        height
        weight
        base_experience
        pokemon_v2_pokemontypes {
          pokemon_v2_type {
            name
          }
        }
        pokemon_v2_pokemonstats {
          base_stat
          pokemon_v2_stat {
            name
          }
        }
        pokemon_v2_pokemonspecy {
          pokemon_v2_pokemonspeciesflavortexts(where: {language_id: {_eq: 9}}, limit: 1) {
            flavor_text
          }
        }
        pokemon_v2_pokemonsprites {
              sprites
      }
    }
  }
`;