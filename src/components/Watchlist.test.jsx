import { beforeEach, describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import Watchlist from './Watchlist.jsx'
import { store } from '../app/store.js'
import { addToWatchlist, clearWatchlist } from '../features/movies/MovieSlice.js'

function renderWatchlist() {
  return render(
    <Provider store={store}>
      <Watchlist />
    </Provider>,
  )
}

describe('Watchlist', () => {
  beforeEach(() => store.dispatch(clearWatchlist()))

  it('affiche un message lorsque la Watchlist est vide', () => {
    renderWatchlist()
    expect(screen.getByText('Votre liste est encore vide')).toBeInTheDocument()
  })

  it('affiche les films présents dans la Watchlist', () => {
    store.dispatch(addToWatchlist(1))
    renderWatchlist()
    expect(screen.getByText('Dune : Deuxième Partie')).toBeInTheDocument()
    expect(screen.getByText(/2024/)).toBeInTheDocument()
  })

  it('retire un film après un clic sur Retirer', async () => {
    const user = userEvent.setup()
    store.dispatch(addToWatchlist(1))
    renderWatchlist()
    await user.click(screen.getByRole('button', { name: /retirer/i }))
    expect(screen.getByText('Votre liste est encore vide')).toBeInTheDocument()
  })

  it('vide la Watchlist avec le bouton prévu', async () => {
    const user = userEvent.setup()
    store.dispatch(addToWatchlist(1))
    store.dispatch(addToWatchlist(2))
    renderWatchlist()
    await user.click(screen.getByRole('button', { name: /vider la watchlist/i }))
    expect(screen.getByText('Votre liste est encore vide')).toBeInTheDocument()
    expect(store.getState().movies.watchlist).toHaveLength(0)
  })
})
