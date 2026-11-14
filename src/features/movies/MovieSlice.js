import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  movies: [
    {
      id: 1,
      title: 'Dune : Deuxième Partie',
      year: 2024,
      Genre: 'Science-fiction',
      poster: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=85',
    },
    {
      id: 2,
      title: 'Le Voyage de Chihiro',
      year: 2001,
      Genre: 'Animation · Fantastique',
      poster: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=85',
    },
    {
      id: 3,
      title: 'La La Land',
      year: 2016,
      Genre: 'Comédie musicale · Romance',
      poster: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85',
    },
    {
      id: 4,
      title: 'Interstellar',
      year: 2014,
      Genre: 'Science-fiction · Drame',
      poster: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=900&q=85',
    },
  ],
  watchlist: [],
}

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addToWatchlist(state, action) {
      const movie = state.movies.find((item) => item.id === action.payload)
      const alreadyAdded = state.watchlist.some((item) => item.id === action.payload)

      if (movie && !alreadyAdded) {
        state.watchlist.push(movie)
      }
    },
    removeFromWatchlist(state, action) {
      state.watchlist = state.watchlist.filter((item) => item.id !== action.payload)
    },
    clearWatchlist(state) {
      state.watchlist = []
    },
  },
})

export const { addToWatchlist, removeFromWatchlist, clearWatchlist } = movieSlice.actions
export const moviesReducer = movieSlice.reducer
export { initialState }
export default movieSlice.reducer
