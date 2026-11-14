import { useDispatch, useSelector } from 'react-redux'
import { clearWatchlist, removeFromWatchlist } from '../features/movies/MovieSlice.js'

function Watchlist() {
  const dispatch = useDispatch()
  const watchlist = useSelector((state) => state.movies.watchlist)

  return (
    <section aria-labelledby="watchlist-title">
      <div className="watchlist-toolbar">
       
        {watchlist.length > 0 && (
          <button className="clear-button" type="button" onClick={() => dispatch(clearWatchlist())}>
            <i className="bi bi-trash3" aria-hidden="true" /> Vider la Watchlist
          </button>
        )}
      </div>

      {watchlist.length === 0 ? (
        <div className="empty-state">
          <i className="bi bi-bookmark-plus" aria-hidden="true" />
          <h2>Votre liste est encore vide</h2>
          <p>Ajoutez un film depuis le catalogue pour le retrouver ici.</p>
        </div>
      ) : (
        <div className="watchlist-items">
          {watchlist.map((movie) => (
            <article className="watchlist-row" key={movie.id}>
              <img className="movie-poster" src={movie.poster} alt={`Visuel de ${movie.title}`} />
              <div>
                <h2>{movie.title}</h2>
                <p>{movie.year} <span aria-hidden="true">·</span> {movie.Genre}</p>
              </div>
              <button
                className="remove-button"
                type="button"
                onClick={() => dispatch(removeFromWatchlist(movie.id))}
              >
                <i className="bi bi-x-lg" aria-hidden="true" /> Retirer
              </button>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

export default Watchlist
