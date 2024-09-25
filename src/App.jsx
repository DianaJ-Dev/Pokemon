import React, { useState, useContext } from 'react';
import './App.css';
import { QueryApi } from './Components/QueryApi';
import { Sort } from './Components/Sort';
import { Pagination } from './Components/Pagination';
import { LookForName } from './Components/LookForName';
import { PokemonCard } from './Components/PokemonCard';
import { PokemonDetail } from './Components/PokemonDetail';
import pokebola from './img/pokeball.png';
import heardw from './img/heardw.png';
import heardwa from './img/heardwa.jpg';
import { FavoriteContext } from './context/FavoriteContext';

function App() {
  let { favoriteList } = useContext(FavoriteContext);
  const [list, setList] = useState([]);
  const [selectOrder, setSelectOrder] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [showFavorite, setShowFavorite] = useState(false);  
  
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
    setShowFavorite(prev => !prev);  
  };

  const handleReset = () => {
    setList([]);  
    setCurrentPage(1);  
    setSelectedPokemon(null);  
    setShowFavorite(false);  
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  let currentItems = [];

  if (showFavorite) {
  
    const favoriteItems = favoriteList.slice(indexOfFirstItem, indexOfLastItem);
    currentItems = [...favoriteItems];
  } else {
    currentItems = list.slice(indexOfFirstItem, indexOfLastItem);
  }

  const totalPages = showFavorite 
    ? Math.ceil(favoriteList.length / itemsPerPage)
    : Math.ceil(list.length / itemsPerPage);

  if (selectedPokemon) {
    return <PokemonDetail pokemon={selectedPokemon} onClose={handleCloseDetail} />;
  }

  return (
    <>
      <div className='container'>
        <div className='pokemon'>
          <nav className='title'>
            <img src={pokebola} alt="Pokebola" className='pokebola' onClick={handleReset}/>
            <h1>Pokédex</h1>
          </nav>
          <aside className='filter'>
            <LookForName setList={setList} />
            <div onClick={handleFavoritesToggle}>
              {showFavorite 
                ? <img src={heardw} style={{ width: '40px', height: '40px', objectFit: 'contain', cursor: 'pointer' }} alt="heard" /> 
                : <img src={heardwa} style={{ width: '40px', height: '40px', objectFit: 'contain', cursor: 'pointer' }} alt="heard" />}
            </div>
            <Sort
              list={list}
              onOrderChange={handleOrderChange}
              selectOrder={selectOrder}
              setSelectOrder={setSelectOrder}
            />
          </aside>

          <div>
            <div className='all-card'>
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
        </div>
      </div>
    </>
  );
}

export default App;