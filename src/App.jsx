/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import Card from './components/card'
import Pagination from './components/pagination'
import './App.css'


export const App = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [numPage, setNumPage] = useState(1);

  const { info, results } = fetchedData;
  const api = `https://rickandmortyapi.com/api/character/?page=${numPage}`

  useEffect(() => {
    fetch(api)
      .then(response => response.json())
      .then(setFetchedData)
  }, [api]);

  if (!results) {
    return "Loading...";
  }

  return (
    <>
      <div className="container-fluid p-5 bg-primary text-white text-center">
        <h1 className="roboto">Info Rick & Morty</h1>
      </div>

      <div className="container text-center">
        <div className="row row-cols-lg-4 row-cols-md-2 col-12 row-gap-3">
          {results.map((character) => {
            return <Card key={character.id} name={character.name} image={character.image} gender={character.gender} status={character.status} />
          }
          )}
        </div>
      </div>

      <Pagination
        numPage={numPage}
        setNumPage={setNumPage}
      />
    </>
  )
}

export default App
