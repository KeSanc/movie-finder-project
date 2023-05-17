/* eslint-disable react/prop-types */

export default function Movies ({ movies }) {
  const hasMovies = movies?.length > 0

  return hasMovies
    ? <ul className='movies'>
      {
        ((movies.map((movie) =>
          <li className='movie' key={movie.id || movie.title}>
            <h3>Title</h3> <p>{movie.title} </p>
            <h3>Year</h3><p>{movie.year} </p>
            <h3>Poster: </h3>  <img src={movie.poster} alt={movie.title} />
          </li>
        )
        ))
      }
      </ul>

    : (
      <div className='no-movies'>
        <h2>No movies found</h2>
      </div>
      )
}
