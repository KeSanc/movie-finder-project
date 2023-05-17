import './App.css'
import { useMovies } from './hooks/useMovies'
import Movies from './components/Movies'
import { useSearch } from './hooks/useSearch'
import { useCallback, useState } from 'react'
import debounce from 'just-debounce-it'

function App () {
  const [sort, setSort] = useState(false)
  const { search, updateSearchQuery } = useSearch()
  const { movies, getMovies, loading, error } = useMovies({ search, sort })

  const debouncedGetMovies = useCallback(debounce(search => {
    getMovies({ search })
  }, 300), [getMovies])

  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies({ search })
  }

  const handleChange = (e) => {
    const newSearch = e.target.value
    updateSearchQuery(newSearch)
    debouncedGetMovies(newSearch)
  }

  const handleSort = () => {
    setSort(!sort)
  }
  return (
    <>
      <header>
        <h1 className='hd-title'> My App to Find Movies</h1>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} id='inputMovie' value={search} name='movie' type='text' placeholder='Avengers, La la land, Toy Story...' />
          <label htmlFor='sort'>Sort by name</label>
          <input checked={sort} onChange={handleSort} id='sort' name='sort' type='checkbox' />
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main className='page'>
        {loading ? <p> Cargando... </p> : <Movies movies={movies} />}
        {error ? <p> Hay un error de: {error} </p> : null}
      </main>

    </>
  )
}

export default App
