import { configureStore } from '@reduxjs/toolkit'
import { moviesReducer } from '../features/movies/MovieSlice.js'

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
})
