const API_KEY = '1bc30177'

export const searchMovies = async ({ search }) => {
  if (search === null || search === undefined || search === '') {
    return null
  }
  try {
    const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY} &s=${search}`)
    const data = await response.json()
    const movies = data.Search
    const mappedMovies = movies?.map((movie) => ({
      title: movie.Title,
      year: movie.Year,
      id: movie.imdbID,
      type: movie.Type,
      poster: movie.Poster
    }))
    return mappedMovies
  } catch (e) {
    throw new Error('Error searching movies')
  }
}
