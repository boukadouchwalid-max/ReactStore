import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar() {
  const watchlistCount = useSelector((state) => state.movies.watchlist.length)

  return (
    <header className="movie-navbar">
      <nav className="navbar-inner" aria-label="Navigation principale">
        <Link className="brand-link" to="/">
          <span className="brand-mark" aria-hidden="true"><i className="bi bi-camera-reels-fill" /></span>
          <span>Movie App</span>
        </Link>
        <div className="nav-links">
          <NavLink className={({ isActive }) => `nav-link-custom${isActive ? ' active' : ''}`} end to="/">
            <i className="bi bi-film" aria-hidden="true" /> Films
          </NavLink>
          <NavLink className={({ isActive }) => `nav-link-custom${isActive ? ' active' : ''}`} to="/watchlist">
            <i className="bi bi-bookmark-heart" aria-hidden="true" /> Watchlist
            <span className="watchlist-count" aria-label={`${watchlistCount} films dans la Watchlist`}>
              {watchlistCount}
            </span>
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
