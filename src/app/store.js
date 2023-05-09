import { configureStore } from '@reduxjs/toolkit'

import authReducer from '../features/auth/authSlice'
import movieReducer from '../features/movie/movieSlice'
import { setupListeners } from '@reduxjs/toolkit/query'

import { movieApi } from '../services/movies'

export const store = configureStore({
    reducer: {
      auth: authReducer,
      movie:movieReducer,
    },
      // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>{
      return getDefaultMiddleware().concat(movieApi.middleware);
    },
})

setupListeners(store.dispatch)