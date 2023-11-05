import { useEffect, useState } from 'react'
import Card from './components/card'
import Pagination from './components/pagination'
import './App.css'


export const App = () => {
  let [fetchedData, setFetchedData] = useState([]);
  let { info, results } = fetchedData;
  let [numPage, setNumPage] = useState(1);
  let api = `https://rickandmortyapi.com/api/character/?page=${numPage}`

  useEffect(() => {
    fetch(api) 
      .then(response => response.json())
      .then(setFetchedData)
  }, [api]);

  console.log(info)

  if (!results) {
    return "Loading...";
  }

  return (
    <>
      <div className="container-fluid p-5 bg-primary text-white text-center">
        <h1 className="roboto">Info Rick & Morty</h1>
      </div>

      <div className="container text-center">
        <div className="row row-cols-4 row-gap-3">
          {results.map((character) => {
            return <Card key={character.id} name={character.name} image={character.image} gender={character.gender} status={character.status} />
          }
          )}
        </div>
      </div>

      <Pagination
        info={info}
        numPage={numPage}
        setNumPage={setNumPage}
      />
    </>
  )
}

export default App
