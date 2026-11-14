import { beforeEach, describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import ListeMovies from './ListeMovies.jsx'
import { store } from '../app/store.js'
import { addToWatchlist, clearWatchlist } from '../features/movies/MovieSlice.js'

function renderMovies() {
  return render(
    <Provider store={store}>
      <ListeMovies />
    </Provider>,
  )
}

describe('ListeMovies', () => {
  beforeEach(() => store.dispatch(clearWatchlist()))

  it('affiche la liste des films', () => {
    renderMovies()
    expect(screen.getByText('Dune : Deuxième Partie')).toBeInTheDocument()
    expect(screen.getByText('Interstellar')).toBeInTheDocument()
  })

  it('affiche le titre, l’année et le genre de chaque film', () => {
    renderMovies()
    expect(screen.getByText('2024')).toBeInTheDocument()
    expect(screen.getByText('Science-fiction')).toBeInTheDocument()
    expect(screen.getByText('Animation · Fantastique')).toBeInTheDocument()
  })

  it('ajoute un film à la Watchlist après un clic', async () => {
    const user = userEvent.setup()
    renderMovies()
    await user.click(screen.getAllByRole('button', { name: 'Ajouter à la Watchlist' })[0])
    expect(store.getState().movies.watchlist).toHaveLength(1)
    expect(screen.getByRole('button', { name: 'Déjà ajouté' })).toBeDisabled()
  })

  it('désactive le bouton lorsqu’un film est déjà ajouté', () => {
    store.dispatch(addToWatchlist(1))
    renderMovies()
    expect(screen.getByRole('button', { name: 'Déjà ajouté' })).toBeDisabled()
  })
})
