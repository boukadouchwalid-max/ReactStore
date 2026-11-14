import { useDispatch, useSelector } from 'react-redux'
import { addToWatchlist } from '../features/movies/MovieSlice.js'

function ListeMovies() {
  const dispatch = useDispatch()
  const { movies, watchlist } = useSelector((state) => state.movies)

  return (
    <section aria-labelledby="catalog-title">
     
      <div className="movie-grid">
        {movies.map((movie) => {
          const isAdded = watchlist.some((item) => item.id === movie.id)

          return (
            <article className="movie-card" key={movie.id}>
              <div className="poster-wrap">
                <img className="movie-poster" src={movie.poster} alt={`Visuel de ${movie.title}`} />
                <span className="poster-year">{movie.year}</span>
              </div>
              <div className="movie-card-body">
                <h2>{movie.title}</h2>
                <p className="movie-genre">{movie.Genre}</p>
                <button
                  className="movie-action"
                  type="button"
                  disabled={isAdded}
                  onClick={() => dispatch(addToWatchlist(movie.id))}
                >
                  {isAdded ? 'Déjà ajouté' : 'Ajouter à la Watchlist'}
                </button>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default ListeMovies
