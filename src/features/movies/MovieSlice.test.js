import { describe, expect, it } from 'vitest'
import {
  addToWatchlist,
  clearWatchlist,
  initialState,
  moviesReducer,
  removeFromWatchlist,
} from './MovieSlice.js'

describe('moviesReducer', () => {


  it('ajoute un film identifié à la Watchlist', () => {
    const state = moviesReducer(initialState, addToWatchlist(1))

    expect(state.watchlist).toHaveLength(1)
    expect(state.watchlist[0].id).toBe(1)
  })

  it('ne permet pas les doublons', () => {
    const once = moviesReducer(initialState, addToWatchlist(1))
    const twice = moviesReducer(once, addToWatchlist(1))

    expect(twice.watchlist).toHaveLength(1)
  })

  it('retire un film identifié de la Watchlist', () => {
    const state = moviesReducer(
      { ...initialState, watchlist: [initialState.movies[0], initialState.movies[1]] },
      removeFromWatchlist(1),
    )

    expect(state.watchlist).toHaveLength(1)
    expect(state.watchlist[0].id).toBe(2)
  })

  it('vide complètement la Watchlist', () => {
    const state = moviesReducer(
      { ...initialState, watchlist: [initialState.movies[0]] },
      clearWatchlist(),
    )

    expect(state.watchlist).toHaveLength(0)
  })
})
