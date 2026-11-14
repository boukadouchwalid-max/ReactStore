import { beforeEach, describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import { store } from '../app/store.js'
import { addToWatchlist, clearWatchlist } from '../features/movies/MovieSlice.js'

function renderNavbar() {
  return render(
    <Provider store={store}>
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    </Provider>,
  )
}

describe('Navbar', () => {
  beforeEach(() => store.dispatch(clearWatchlist()))

  it('affiche le nom de l’application', () => {
    renderNavbar()
    expect(screen.getByText('Movie App')).toBeInTheDocument()
  })

  it('affiche les liens de navigation', () => {
    renderNavbar()
    expect(screen.getByRole('link', { name: 'Films' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /watchlist/i })).toBeInTheDocument()
  })

  it('affiche le nombre de films dans la Watchlist', () => {
    store.dispatch(addToWatchlist(1))
    renderNavbar()
    expect(screen.getByLabelText('1 films dans la Watchlist')).toHaveTextContent('1')
  })
})
