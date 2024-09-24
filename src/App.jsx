
import React, { useState } from 'react';
import './App.css';
import { QueryApi } from './Components/QueryApi';
import { Sort } from './Components/Sort';
import { Pagination } from './Components/Pagination';
import { LookForName } from './Components/LookForName';
import { PokemonCard } from './Components/PokemonCard';
import { PokemonDetail } from './Components/PokemonDetail';
import { Favorite } from './Components/Favorite';
import { useSelector } from 'react-redux';

function App() {
  const [list, setList] = useState([]);
  const [selectOrder, setSelectOrder] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [showFavorite, setShowFavorite] = useState(false);  // Estado para mostrar favoritos

  const favorites = useSelector(state => state.favorites);  // Favoritos desde Redux
  
  const handleOrderChange = (orderList) => {
    setList(orderList);
    setCurrentPage(1);
  };

  const handleClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const handleCloseDetail = () => {
    setSelectedPokemon(null);
  };

  const handleFavoritesToggle = () => {
    setShowFavorite(prev => !prev);  // Alternar entre mostrar y ocultar favoritos
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(list.length / itemsPerPage);
  
  if (selectedPokemon) {
    return (
      <PokemonDetail pokemon={selectedPokemon} onClose={handleCloseDetail} />
    );
  }

  return (
    <>
      <LookForName setList={setList} />

      <button onClick={handleFavoritesToggle}>
        {showFavorite ? 'Ocultar Favoritos' : 'Mostrar Favoritos'}
      </button>

      {showFavorite ? (
        <Favorite favorites={favorites} />
      ) : (
        <>
          <Sort
            list={list}
            onOrderChange={handleOrderChange}
            selectOrder={selectOrder}
            setSelectOrder={setSelectOrder}
          />

          <div>
            <h2>Pokémon</h2>
            <div>
              {currentItems.map(pokemon => (
                <PokemonCard
                  key={pokemon.id}
                  id={pokemon.id}
                  name={pokemon.name}
                  image={pokemon.pokemon_v2_pokemonsprites[0].sprites.front_default}
                  onClick={() => handleClick(pokemon)}
                />
              ))}
            </div>
          </div>

          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />

          {list.length === 0 && <QueryApi setList={setList} />}
        </>
      )}
    </>
  );
}

export default App;