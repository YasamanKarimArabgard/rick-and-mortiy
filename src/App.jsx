import { useEffect, useState } from 'react';
import Navbar from './components/navbar/Navbar';
import CharacterList from './components/characterList/CharacterList';
import getCharacters from './services/getCharachters';
import CharacterDetail from './components/characterDetail/CharacterDetail';
import axios from 'axios';

function App() {

  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState('')
  const [selectedChar, setSelectedChar] = useState(null);
  const [favoriteItem, setFavoriteItem] = useState([]);

  // console.log(characters);

  useEffect(() => {
    const controler = new AbortController();
    const signal = controler.signal;

    async function fetchData() {
      try {
        setLoading(true)
        const { data } = await getCharacters(searchInput, signal);
        setCharacters(data.results);
        // console.log(data.results);
        setLoading(false);
      } catch (err) {
        if (axios.isCancel()) {
          setCharacters([])
          console.log(err.response.data.error);
        }
      }
    }

    fetchData();
    return () => {
      controler.abort();
    }
  }, [searchInput])

  function selectId(id) {
    setSelectedChar(id);
  }

  const handleAddFavorite = (char) => {
    setFavoriteItem((prevState) => [...prevState, char])
  }

  const handleDeleteFav = (id, e) => {
    e.preventDefault();
    e.stopPropagation()
    const favList = favoriteItem.filter(f => f.id !== id);
    setFavoriteItem(favList);
  }

  const isAddedFavorite = favoriteItem.map(fav => fav.id).includes(selectedChar);

  return (
    <main className='bg-slate-900 max-h-screen h-screen min-h-screen flex flex-col justify-between overflow-hidden'>

      <Navbar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        favoriteItem={favoriteItem} 
        handleDeleteFav={handleDeleteFav}
        />
      {
        loading ?
          <p className="text-red-500 text-center">characters are loading...</p> :
          <main className='characterlist flex-wrap overflow-hidden h-fit flex flex-row-reverse justify-between gap-x-4 gap-y=2'>
            <CharacterDetail
              selectedChar={selectedChar}
              handleAddFavorite={handleAddFavorite}
              isAddedFavorite={isAddedFavorite} />
            <CharacterList
              characters={characters}
              selectId={selectId}
              selectedChar={selectedChar} />
          </main>
      }
      <footer className='flex justify-center h-4'></footer>
    </main>
  )
}

export default App;