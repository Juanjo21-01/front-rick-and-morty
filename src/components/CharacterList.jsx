import { useEffect, useState } from 'react';
import { helpHttp } from '../helpers/helpHttps';
import Character from './Character';
import Loader from './Loader';
import NavPage from './NavPage';

const CharacterList = () => {
  // VARIABLE DE ESTADO
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  // URL de la API
  let url = `https://rickandmortyapi.com/api/character?page=${page}`;

  useEffect(() => {
    helpHttp()
      .get(url)
      .then((res) => {
        setLoading(false);
        setCharacters(res);
      });
  }, [url]);

  return (
    <section className="container ">
      {loading ? (
        loading && <Loader />
      ) : (
        <>
          <NavPage page={page} setPage={setPage} characters={characters.info} />
          <div className="row text-secondary ">
            {characters.results.map((character) => (
              <Character key={character.id} character={character} />
            ))}
          </div>
          <NavPage page={page} setPage={setPage} characters={characters.info} />
        </>
      )}
    </section>
  );
};

export default CharacterList;
